import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: "Medlink Smart",
  description: "Our Product offers an efficiency that brings together various healtcare services, such as medical records, doctor consultations, medication ordering and treatment reminder.",
  icons: {
    icon: "/favicons.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body>
        <AuthProvider>
          <ToastContainer />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
