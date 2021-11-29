import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Tree, Card, Row, Col } from 'antd';
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

export default function TreeTransfer() {
  const [checkedNodes, setCheckedNodes] = useState([]);

  const onCheck = (selectedKeys, info) => {
    const filteredTree = filterTree(selectedKeys, info.halfCheckedKeys, data);
    setCheckedNodes(filteredTree);
  };

  return (
    <FlexBox>
      <Row type="flex" gutter={20}>
        <Col>
          <Card>
            <Tree checkable defaultExpandAll onCheck={onCheck}>
              {renderTreeNodes(data)}
            </Tree>
          </Card>
        </Col>
        <Col>
          <Card>
            <Tree checkable defaultExpandAll>
              {renderTreeNodes(checkedNodes)}
            </Tree>
          </Card>
        </Col>
      </Row>
    </FlexBox>
  );
}
