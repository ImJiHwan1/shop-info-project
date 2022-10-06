import React from "react";
import "../styles/ui.css";
import "../styles/antd.less";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
