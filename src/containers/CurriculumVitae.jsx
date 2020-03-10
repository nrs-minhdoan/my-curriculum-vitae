import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components";

import useLanguage from "../hooks/useLanguage";
import Tabs from "../components/UI/Tabs/Tabs";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";

import { SECONDARY, SHADOW_COLOR } from "../themes/colors";

const Wrapper = styled.div`
  width: 55%;
  height: 100%;
  background-color: ${SECONDARY};
  box-shadow: 0px 15px 60px -10px ${SHADOW_COLOR};
`;

function CurriculumVitae() {
  const [tab, setTab] = useState(0);
  const text = useLanguage();

  const tabs = useMemo(() => {
    const rs = Object.keys(text.tabs).map(item => text.tabs[item]);
    return rs;
  }, [text]);

  const _handleChangeTab = useCallback(value => {
    setTab(value);
  }, []);

  const _handleRender = useCallback(() => {
    switch (tab) {
      case 0:
        return <Skills />;

      case 1:
        return <Experience />;

      case 2:
        return <Education />;

      case 3:
        return <Certifications />;

      default:
        return <Skills />;
    }
  }, [tab]);

  return (
    <Wrapper>
      <Tabs data={tabs} active={tab} onChange={_handleChangeTab} />
      {_handleRender()}
    </Wrapper>
  );
}

export default CurriculumVitae;
