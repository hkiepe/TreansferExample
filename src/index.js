import React from 'react';
import ReactDOM from 'react-dom';
import TreeTransfer from './TransferTree.react';
import AntdTreeTransfer from './AntdTreeTransfer.react';

ReactDOM.render(
  <div>
    <TreeTransfer />
    <AntdTreeTransfer />
  </div>,
  document.getElementById('root')
);
