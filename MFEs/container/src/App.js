import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";

console.log(mount);

export default function () {
  return (
    <>
      <div>Hi, Container</div>
      <hr />
      <MarketingApp />
    </>
  );
}
