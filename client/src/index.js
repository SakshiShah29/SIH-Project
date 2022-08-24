import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import clients from "./client";
import store from "./store/ReduxStore";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={clients}>
        <ReactQueryDevtools />
        <MoralisProvider
          serverUrl="https://a0lgf2brcjmi.usemoralis.com:2053/server"
          appId="72UJC9m3PuSy3nGPQkgQYzdmSR8sjKr2QhdoY2wp"
        >
          <App />
        </MoralisProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
