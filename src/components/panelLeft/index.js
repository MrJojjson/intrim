import React from 'react';
import styled from 'styled-components';

import {
  primaryColor,
  widthLeftPanel,
  padding,
} from '../../css';

const PanelLeftContainer = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  background: ${primaryColor()};
  width: ${widthLeftPanel};
  height: 100%;
  padding: ${padding}px;
`;

const LeftPanel = (props) => {
  const { test } = props;
  return (
    <PanelLeftContainer>
      Left panel
    </PanelLeftContainer>
  );
};

export default LeftPanel;
