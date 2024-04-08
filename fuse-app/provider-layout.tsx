import React, { memo, useCallback, Suspense, useState } from "react";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "next-themes";
import { useLocation } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

const ProviderLayout = ({
  queryClient,
  children,
}: {
  queryClient: any;
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const [loadingState, setLoadingState] = useState(true);

  return (
    <React.StrictMode>
      <ThemeProvider attribute="class">
        <Suspense>
          <QueryClientProvider client={queryClient}>
          <div className="flex flex-col min-h-[100dvh] bg-background">
              <Header />
            {children}

            </div>
          </QueryClientProvider>
        </Suspense>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default memo(ProviderLayout);
