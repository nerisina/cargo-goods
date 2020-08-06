import React from "react";
import Aux from "../../hoc/Aux";

const Layout = (props) => (
  <Aux>
    {/** Toolbar */}
    <header className="tc ma2">
      <h1>Cargo Goods</h1>
    </header>
    {/** Dashboard */}
    <main>{props.children}</main>
  </Aux>
);

export default Layout;
