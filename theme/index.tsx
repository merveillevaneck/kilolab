import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  borderRadius: 5,
  headerHeight: 70,
  headingSize: 40,
  titleSize: 130,
  footerHeight: 300,
  bubbleShadow: '0px 0px 1px rgba(0, 0, 0, 0.5)',
  titleShadow: "0px 2px 1px rgba(0, 0, 0, 0.5)",
  colors: {
    header: "rgba(0, 0, 0, 0.8)",
    primary: '#6C63FF',
    secondary: '#8EE3C8',
    text: 'rgba(0, 0, 0, 0.7)',
    textLight: 'white',
    error: 'red',
    blue: '#80A1D4',
    confirmBackground: '#F7F4EA',
    backgroundDark: 'rgba(20, 7, 47, 0.6)',
    backgroundLight: 'rgba(142, 227, 200, 0.5)',
    input: 'white',
    inputLabel: 'rgba(255, 255, 255, 0.8)',
    iconLight: 'white',
  },
};

export const useTheme = () => {
  return Theme;
}
