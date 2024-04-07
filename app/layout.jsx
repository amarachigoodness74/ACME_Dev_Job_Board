import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

import "@styles/globals.css";

config.autoAddCss = false;

export const metadata = {
  title: "ACME Developers Job Board",
  description: "Find, filter and easiy apply to developers jobs",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
