import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { PRIMARY, GREY } from "../../../themes/colors";
import { progressing } from '../../../themes/animations';

const Bar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background-color: ${GREY};
`;

const ProgressContainer = styled.div`
  width: ${props => props.points}%;
  height: 10px;
  border-radius: 10px;
`;

const Progress = styled.div`
  height: 10px;
  border-radius: 10px;
  background-color: ${PRIMARY};
  animation: ${progressing} 1s ease-in-out;
`;

function ProgressBar({ points }) {
  return (
    <Bar>
      <ProgressContainer points={points}>
        <Progress />
      </ProgressContainer>
    </Bar>
  );
}

ProgressBar.defaultProps = {
  points: 0
};

ProgressBar.propTypes = {
  points: PropTypes.number
};

const MemoProgressBar = memo(ProgressBar);

export default MemoProgressBar;
