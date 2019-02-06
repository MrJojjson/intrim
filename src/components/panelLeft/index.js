import React from 'react';

import style from './panelLeft.less';

const LeftPanel = (props) => {
  const { test } = props;
  return (
    <div className={style.panelLeft}>
      Left panel
    </div>
  );
};

export default LeftPanel;
