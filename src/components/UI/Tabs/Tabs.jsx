import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { PRIMARY, WHITE } from "../../../themes/colors";
import { EXTRA_SMALL_DEVICES, large } from "../../../themes/size";
import { center } from "../../../themes/styles";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;

  @media ${EXTRA_SMALL_DEVICES} {
    flex-wrap: wrap;
  }
`;

const Tab = styled.div`
  flex: 1;
  padding: 10px;
  cursor: pointer;
  font-weight: 700;
  color: ${(props) => (props.activated ? PRIMARY : WHITE)};
  ${center}
  ${large}
  transition: color 0.3s ease;

  @media ${EXTRA_SMALL_DEVICES} {
    width: 100%;
    white-space: nowrap;
  }
`;

const Bar = styled.div`
  width: calc(100% / ${(props) => props.size});
  height: 3px;
  background-color: ${PRIMARY};
  position: absolute;
  z-index: 2;
  bottom: -2px;
  left: ${(props) => `calc(100% * ${props.active} / ${props.size})`};
  transition: left 0.3s ease;

  @media ${EXTRA_SMALL_DEVICES} {
    width: 100%;
    left: 0px;
  }
`;

function Tabs({ data, active, onChange }) {
  const size = data.length;

  return (
    <Container>
      <Bar size={size} active={active} />
      {data.map((item, index) => (
        <Tab
          key={`tab-${index}`}
          activated={index === active}
          onClick={() => onChange(index)}
        >
          {item}
        </Tab>
      ))}
    </Container>
  );
}

Tabs.defaultProps = {
  data: [],
  active: 0,
  onChange: () => {},
};

Tabs.propTypes = {
  data: PropTypes.array.isRequired,
  active: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

const MemoTabs = memo(Tabs);

export default MemoTabs;
