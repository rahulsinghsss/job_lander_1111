import { MantineProvider } from "@mantine/core";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Job Management Portal",
  description: "Admin job creation and management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
