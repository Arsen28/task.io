import React from "react";
import "./styles.css";
import Header from "./components/header/header";

export default function App({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}


