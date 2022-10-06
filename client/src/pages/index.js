import { Header } from "antd/lib/layout/layout";
import Head from "next/head";
import React, { useState } from "react";
import About from "../components/about/index";
import Store from "../components/store/index";

const Home = () => {
  const [panelName, setPanelName] = useState("ABOUT");

  const onTabClick = (_panelName) => {
    setPanelName(_panelName);
  };

  return (
    <>
      <Head>
        <title>{`AWESOME FOOD STORE | ${panelName}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="header-wrap">
        <Header style={{ background: "#fff" }}>
          <div className="title">AWESOME FOOD STORE</div>
          <nav className="c-menu-wrap">
            <ul style={{ marginBottom: "0" }}>
              <li onClick={() => onTabClick("ABOUT")}>
                <a>ABOUT</a>
              </li>
              <li onClick={() => onTabClick("STORE")}>
                <a>STORE</a>
              </li>
            </ul>
          </nav>
        </Header>
      </div>
      <div className="c-title-area">
        <h1 className="c-color1">{panelName}</h1>
        <div className="c-title-line">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {panelName === "ABOUT" ? <About /> : <Store />}
      <footer className="footer">
        <div className="footer-line" />
        <br />
        <address>@2020 임지환</address>
      </footer>
    </>
  );
};

export default Home;
