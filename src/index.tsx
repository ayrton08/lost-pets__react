import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

const rootElement = document.querySelector(".root");
const root = createRoot(rootElement);

root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <RecoilRoot>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RecoilRoot>
  </Suspense>
);
