import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Breadcrumbs />
        <main>{children}</main>
      </body>
    </html>
  );
}
