import { createContext, useContext } from "react";

import language from "../languages/i18n";

export const Language = createContext("en");

function useLanguage() {
  const lang = useContext(Language);
  return language[lang];
}

export default useLanguage;
