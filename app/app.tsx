"use client";

import ScrollToTop from "@/fuse-app/components/scroll-to-top";
import ErrorBoundary from "@/fuse-app/lib/error-boundary";
import ProviderLayout from "@/fuse-app/provider-layout";
import AboutView from "@/fuse-app/views/about-view";
import ContactView from "@/fuse-app/views/contact-view";
import { ErrorView } from "@/fuse-app/views/error-view";
import FeaturesView from "@/fuse-app/views/features-view";
import GettingStartedView from "@/fuse-app/views/getting-started-view";
import MainView from "@/fuse-app/views/main-view";
import PricingView from "@/fuse-app/views/pricing-view";
import PrivacyView from "@/fuse-app/views/privacy-view";
import TermsView from "@/fuse-app/views/terms-view";
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
        <Route path="/pricing/*" element={<PricingView />} />
        <Route path="/contact/*" element={<ContactView />} />
        <Route path="/features/*" element={<FeaturesView />} />
        <Route path="/about/*" index element={<AboutView />} />
        <Route path="/getting-started/*" element={<GettingStartedView />} />
        <Route path="/terms/*" element={<TermsView />} />
        <Route path="/privacy/*" element={<PrivacyView />} />
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
