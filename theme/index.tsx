import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  borderRadius: 5,
  headerHeight: 70,
  headingSize: 40,
  titleSize: 130,
  footerHeight: 300,
  bubbleShadow: '0px 0px 1px rgba(0, 0, 0, 0.5)',
  titleShadow: "0px 2px 1px rgba(255, 255, 255, 0.5)",
  textShadow: "0px 1px 1px rgba(0, 0, 0, 0.3)",
  colors: {
    header: "rgba(0, 0, 0, 0.8)",
    primary: '#6C63FF',
    secondary: '#B6EEDC',
    text: 'rgba(0, 0, 0, 0.7)',
    textLight: 'white',
    error: 'red',
    blue: '#80A1D4',
    confirmBackground: '#F7F4EA',
    background: {
      dark: '#2F2F2F',
      light: 'rgba(142, 227, 200, 0.5)',
      primary: '#6C63FF',
      secondary: 'rgba(142, 227, 200, 1)',
    },
    input: 'white',
    inputLabel: 'rgba(255, 255, 255, 0.8)',
    iconLight: 'white',
  },
};

export const useTheme = () => {
  return Theme;
}
