import { ThemeProvider } from "@components/ThemeProvider";
import "@styles/global.scss";

export const metadata = {
  title: "Calvin",
  description: "Calvin's personal website",
  icons: {
    icon: "/logo.svg",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
