import { useContext } from 'react';
import { ThemeContext } from './contextTheme';

export const useTheme = () => useContext(ThemeContext);
