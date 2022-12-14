import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: number;
    headerHeight: number;
    footerHeight: number;
    headingSize: number;
    titleSize: number;
    bubbleShadow: string;
    titleShadow: string;
    textShadow: string;

    colors: {
      header: string;
      primary: string;
      secondary: string;
      text: string;
      textLight: string;
      background: {
        dark: string,
        light: string,
        primary: string,
        secondary: string,
      }
      error: string;
      blue: string;
      confirmBackground: string;
      input: string;
      inputLabel: string;
      iconLight: string;
    };
  }
}
