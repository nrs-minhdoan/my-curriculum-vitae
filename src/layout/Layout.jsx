import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components";

import useLanguage from "../hooks/useLanguage";
import Tabs from "../components/UI/Tabs/Tabs";
import Skills from "../containers/Skills";
import Experience from "../containers/Experience";
import Education from "../containers/Education";
import Certifications from "../containers/Certifications";

import { SECONDARY, SHADOW_COLOR } from "../themes/colors";
import { EXTRA_SMALL_DEVICES, LARGE_DEVICES } from "../themes/size";

const Container = styled.div`
  width: 55%;
  height: 100%;
  background-color: ${SECONDARY};
  box-shadow: 0px 15px 60px -10px ${SHADOW_COLOR};

  @media ${LARGE_DEVICES} {
    width: 80%;
  }

  @media ${EXTRA_SMALL_DEVICES} {
    width: 90%;
  }
`;

function Layout() {
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
    <Container>
      <Tabs data={tabs} active={tab} onChange={_handleChangeTab} />
      {_handleRender()}
    </Container>
  );
}

export default Layout;
