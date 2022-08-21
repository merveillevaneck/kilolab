import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
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

  div, html, h1, h2, h3, h4, p, span, text, a, header, footer {
    font-family: Ubunutu;
  }
`;

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "KiloLab - The Reusable Software Powerhouse",
  descrition: "Make beautiful and custom Web and Mobile Applications, Web designs and more with reusable software.",
  viewport: "width=device-width,initial-scale=1",
  "og:image": "https://www.kilolab.co.za/kilolab_logo.svg",
  "og:type": "website",
  "og:url": "https://www.kilolab.co.za",
  "og:title": "KiloLab - The Reusable Software Powerhouse",
  "og:description": "Make beautiful and custom Web and Mobile Applications, design and more with reusable software.",
});

export const loader = async () => {
  return {
    ENV: {
      NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
      NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
      NEXT_PUBLIC_USER_ID: process.env.NEXT_PUBLIC_USER_ID,
    },
  };
}

export default function App() {
  const data = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script defer data-domain="kilolab.co.za" src="https://plausible.io/js/plausible.js"></script>
        {typeof document === "undefined"
          ? "__STYLES__"
          : null}
      </head>
      <body>
        <ThemeProvider theme={Theme}>
          <Styles />
          <Header />
          <Outlet />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(
                data.ENV
              )}`,
            }}
          />
          {/* <Footer /> */}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
