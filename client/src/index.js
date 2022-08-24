import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import clients from "./client";
import store from "./store/ReduxStore";
import { MoralisProvider } from "react-moralis";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={clients}>
        <ReactQueryDevtools />
        <MoralisProvider
          serverUrl="https://6ce1rqhctc4k.usemoralis.com:2053/server"
          appId="bdOcQnM593v6lbT7U4X0mOwWvKw3nQuNbNGVbCMw"
        >
          <App />
        </MoralisProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
