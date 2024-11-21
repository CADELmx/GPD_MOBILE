import { useColorScheme } from 'react-native';

export const ThemedColor = () => {
  const theme = useColorScheme();

  const lightTheme = {
    default: '#121212',
    primary: '#6200EE',
    secondary: '#B00020',
    disable: '#BDBDBD',
    link: '#1E88E5',
    modal: "#ffffff",
    thirtiary: '#309b7b',
  };
  const darkTheme = {
    default: '#ffffff',
    primary: '#BB86FC',
    secondary: '#CF6679',
    disable: '#757575',
    link: '#82B1FF',
    modal: "#121212",
    thirtiary: '#309b7b',
  };

  const themeColors = theme === 'dark' ? darkTheme : lightTheme;

  return themeColors;
};
