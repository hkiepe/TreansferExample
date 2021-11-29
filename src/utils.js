import React from 'react';
import { Tree } from 'antd';

export const renderTreeNodes = data =>
  data.map(item =>
    item.children ? (
      <Tree.TreeNode title={item.title} key={item.key} dataRef={item}>
        {renderTreeNodes(item.children)}
      </Tree.TreeNode>
    ) : (
      <Tree.TreeNode {...item} dataRef={item} />
    )
  );

export const filterTree = (keys, halfKeys, rootNode) =>
  rootNode
    ? rootNode
        .filter(node => keys.includes(node.key) || halfKeys.includes(node.key))
        .map(nodeRoot => ({
          ...nodeRoot,
          children: filterTree(keys, halfKeys, nodeRoot.children)
        }))
    : [];
