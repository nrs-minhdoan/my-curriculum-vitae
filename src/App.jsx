import React, { useState, useCallback } from "react";
import styled from "styled-components";

import { Language } from "./hooks/useLanguage";
import CurriculumVitae from "./containers/CurriculumVitae";

import { PRIMARY, WHITE, BACKGROUND_COLOR } from "./themes/colors";
import { normal } from "./themes/size";
import { center } from "./themes/styles";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${BACKGROUND_COLOR};
  position: relative;
  ${center}
`;

const LanguageMenu = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
`;

const LanguageOption = styled.div`
  flex: 1;
  text-align: center;
  color: ${props => (props.active ? PRIMARY : WHITE)};
  cursor: ${props => (props.active ? "default" : "pointer")};
  ${normal}

  &:hover {
    color: ${PRIMARY};
  }
`;

const Border = styled.div`
  border-right: solid 1px ${WHITE};
  height: 20px;
  margin: 0px 20px;
`;

function App() {
  const [lang, setLang] = useState("en");

  const _handleChangeLanguage = useCallback(lng => {
    setLang(lng);
  }, []);

  return (
    <Language.Provider value={lang}>
      <Container>
        <LanguageMenu>
          <LanguageOption
            active={lang === "en"}
            onClick={() => _handleChangeLanguage("en")}
          >
            English
          </LanguageOption>
          <Border />
          <LanguageOption
            active={lang === "vi"}
            onClick={() => _handleChangeLanguage("vi")}
          >
            Vietnamese
          </LanguageOption>
        </LanguageMenu>
        <CurriculumVitae />
      </Container>
    </Language.Provider>
  );
}

export default App;
