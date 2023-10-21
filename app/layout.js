import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Depublic",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <AuthContextProvider>
            <Navbar />
            {children}
          </AuthContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
