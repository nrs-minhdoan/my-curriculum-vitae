import React, { useState, useCallback } from "react";
import styled from "styled-components";

import Tabs from "../components/UI/Tabs/Tabs";

import { SECONDARY, SHADOW_COLOR } from "../themes/colors";

const Wrapper = styled.div`
  width: 55%;
  height: 1500px;
  background-color: ${SECONDARY};
  box-shadow: 0px 15px 60px -10px ${SHADOW_COLOR};
`;

const tabs = ["Skills", "Experience", "Education", "Certifications"];

function CurriculumVitae() {
  const [tab, setTab] = useState(0);

  const _handleChangeTab = useCallback(value => {
    setTab(value);
  }, []);

  return (
    <Wrapper>
      <Tabs data={tabs} active={tab} onChange={_handleChangeTab} />
    </Wrapper>
  );
}

export default CurriculumVitae;
