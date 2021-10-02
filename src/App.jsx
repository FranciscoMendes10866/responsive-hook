import React from "react";
import classNames from "classnames";

import styles from "./App.module.css";
import useMediaQuery from "./hooks/useMediaQuery";

const App = () => {
  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);
  return (
    <div
      className={classNames([
        styles.layout,
        isMobile && styles.mobile,
        isTablet && styles.tablet,
        styles.desktop,
      ])}
    >
      <h1>{isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"}</h1>
    </div>
  );
};

export default App;
