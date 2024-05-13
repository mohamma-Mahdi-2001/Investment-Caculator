import React from "react";
import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="this is many bag" />
      <h1>Investment CalCulator</h1>
    </header>
  );
}
