import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis",
  description: "Next JS application",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-blue-900 text-gray-50 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>

        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
};

export default RootLayout;
