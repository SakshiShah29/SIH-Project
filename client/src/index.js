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
          serverUrl="https://utenli6iwpvw.usemoralis.com:2053/server"
          appId="MWimdQYCKxWopxklrWuY2L2TG0QKAOATDhuExk4X"
        >
          <App />
        </MoralisProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
