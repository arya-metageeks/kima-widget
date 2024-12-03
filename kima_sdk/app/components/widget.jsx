"use client";

import dynamic from "next/dynamic";
import React from "react";
import {
  KimaTransactionWidget,
  KimaProvider,
  FontSizeOptions,
  ModeOptions,
  ColorModeOptions,
} from "@kimafinance/kima-transaction-widget";
import "@kimafinance/kima-transaction-widget/dist/index.css";

const App = () => {
  return (
    <KimaProvider>
      <div style={{ margin: "0 5vw" }}>
        <div className="container">
          <KimaTransactionWidget
            theme={{
              colorMode: ColorModeOptions.light,
              fontSize: FontSizeOptions.medium,
            }}
            mode={ModeOptions.bridge}
            kimaBackendUrl="http://localhost:3001"
            kimaNodeProviderQuery="https://api-staging.kima.finance"
          />
        </div>
      </div>
    </KimaProvider>
  );
};

export default App;
