import React from 'react';
import styled from 'styled-components';

import {
  secondaryColor,
  widthTopPanel,
  heightTopPanel,
} from '../../css';

const PanelTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  background: ${secondaryColor()};
  width: ${widthTopPanel};
  height: ${heightTopPanel};
  min-height: ${heightTopPanel};
`;

const TopPanel = (props) => {
  const { test } = props;
  return (
    <PanelTopContainer>
      Top panel
    </PanelTopContainer>
  );
};

export default TopPanel;
