import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ConfigProvider, AppRoot, CardScroll } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

let list = ["tickets", "adsfds", "afdsfsd"];

root.render(
  <StrictMode>
    <ConfigProvider>
      <AppRoot>
        <CardScroll children={"1"} />
        <App />
      </AppRoot>
    </ConfigProvider>
  </StrictMode>
);
