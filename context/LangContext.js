import { createContext, useState } from "react";

export const LangContext = createContext();

export default function LangProvider({ children }) {
  const [langValue, setLangValue] = useState("eng");

  return (
    <LangContext.Provider value={{ langValue, setLangValue }}>
      {children}
    </LangContext.Provider>
  );
}
