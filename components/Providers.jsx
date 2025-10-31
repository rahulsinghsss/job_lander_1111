"use client";

import { MantineProvider } from "@mantine/core";

export default function Providers({ children }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        primaryColor: "indigo",
      }}
    >
      {children}
    </MantineProvider>
  );
}
