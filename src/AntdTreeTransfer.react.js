import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tree, Transfer } from 'antd';
import styled from 'styled-components';
import data from './data.js';
import { filterTree, renderTreeNodes } from './utils.js';

const FlexBox = styled.div`
  margin: 5%;
  padding: 5%;
  border: 1px solid palevioletred;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function AntdTreeTransfer() {
  const [leftCheckedKeys, setLeftCheckedKeys] = useState([]);
  const [checkedNodes, setCheckedNodes] = useState([]);
  const [targetNodes, setTargetNodes] = useState([]);

  return (
    <FlexBox>
      <Transfer
        operations={['', 'Clear']}
        onChange={(_, direction) => {
          setLeftCheckedKeys([]);

          direction === 'right'
            ? setTargetNodes(checkedNodes)
            : setTargetNodes([]);
        }}
        style={{ width: '50vh' }}
      >
        {({ direction, onItemSelect, selectedKeys }) =>
          direction === 'left' ? (
            <Tree
              showLine
              blockNode
              checkable
              defaultExpandAll
              checkedKeys={leftCheckedKeys}
              onCheck={(selectedKeys, info) => {
                setLeftCheckedKeys(selectedKeys);
                const filteredTree = filterTree(
                  selectedKeys,
                  info.halfCheckedKeys,
                  data
                );
                setCheckedNodes(filteredTree);

                const eventKey = info.node.props.eventKey;
                onItemSelect(eventKey, selectedKeys.includes(eventKey));
              }}
            >
              {renderTreeNodes(data)}
            </Tree>
          ) : (
            <Tree
              autoExpandParent
              blockNode
              checkable
              onCheck={(selectedKeys, info) => {
                const eventKey = info.node.props.eventKey;
                onItemSelect(eventKey, selectedKeys.includes(eventKey));
              }}
            >
              {renderTreeNodes(targetNodes)}
            </Tree>
          )
        }
      </Transfer>
    </FlexBox>
  );
}
