import React from 'react';

import style from './panelMiddle.less';

const MiddlePanel = (props) => {
  const { test } = props;
  return (
    <div className={style.panelMiddle}>
      Middle panel
    </div>
  );
};

export default MiddlePanel;
