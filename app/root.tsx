import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Header, Footer } from '../app/components';
import { Theme } from '../theme'

const Styles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  html {
    margin: 0;
    padding: 0;
  }
`;

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined"
          ? "__STYLES__"
          : null}
      </head>
      <body>
        <ThemeProvider theme={Theme}>
          <Styles />
          <Header />
          <Outlet />
          <Footer />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
