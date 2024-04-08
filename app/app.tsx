"use client";

import ScrollToTop from "@/fuse-app/components/scroll-to-top";
import ErrorBoundary from "@/fuse-app/lib/error-boundary";
import ProviderLayout from "@/fuse-app/provider-layout";
import { AboutView } from "@/fuse-app/views/about-view";
import { ErrorView } from "@/fuse-app/views/error-view";
import MainView from "@/fuse-app/views/main-view";
import { NextView } from "@/fuse-app/views/next-view";
import React, { lazy, useMemo, useState } from "react";
import { QueryClient } from "react-query";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";


function App() {
  const [queryClient] = useState(() => new QueryClient());

  const routes = useMemo(
    () => [
      <Route
        key="main"
        path=""
        element={
          <ProviderLayout queryClient={queryClient}>
            <ErrorBoundary fallbackRender={({ error }) => <ErrorView />}>
              <ScrollToTop />
              <Outlet />
            </ErrorBoundary>
          </ProviderLayout>
        }
      >
        <Route index element={<MainView />} />
        <Route path="/next/*" element={<NextView />} />
      </Route>,
      <Route
        key="about"
        path="/about"
        element={
          <ProviderLayout queryClient={queryClient}>
            <ErrorBoundary fallbackRender={({ error }) => <ErrorView />}>
              <ScrollToTop />
              <Outlet />
            </ErrorBoundary>
          </ProviderLayout>
        }
      >
        <Route path="/about/*" index element={<AboutView />} />
      </Route>,
      <Route key="error" path="*" element={<ErrorView />} />,
    ],
    [queryClient]
  );

  const memoizedRouter = useMemo(
    () => createBrowserRouter(createRoutesFromElements(routes)),
    [routes]
  );

  return <RouterProvider router={memoizedRouter} />;
}

export default App;
