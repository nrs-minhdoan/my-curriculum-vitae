import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { WHITE, PRIMARY } from "../../../themes/colors";
import { center } from "../../../themes/styles";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Tab = styled.div`
  flex: 1;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
  color: ${props => (props.activated ? PRIMARY : WHITE)};
  ${center};
  transition: color 0.3s ease;
`;

const Bar = styled.div`
  width: calc(100% / ${props => props.size});
  height: 3px;
  background-color: ${PRIMARY};
  position: absolute;
  z-index: 2;
  bottom: -2px;
  left: ${props => `calc(100% * ${props.active} / ${props.size})`};
  transition: left 0.3s ease;
`;

function Tabs({ data, active, onChange }) {
  const size = data.length;
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

Tabs.defaultProps = {
  data: [],
  active: 0,
  onChange: () => {}
};

Tabs.propTypes = {
  data: PropTypes.array.isRequired,
  active: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

const MemoTabs = memo(Tabs);

export default MemoTabs;
