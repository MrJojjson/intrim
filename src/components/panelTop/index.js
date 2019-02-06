import React from 'react';

import style from './panelTop.less';

const TopPanel = (props) => {
  const { test } = props;
  return (
    <div className={style.panelTop}>
      Top panel
    </div>
  );
};

export default TopPanel;
