import React, { createContext } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native'

import defaultTheme from './defaultTheme';

export const ThemeContext = createContext(defaultTheme);

const ThemeProvider: React.FC = (props) => {
    const theme = defaultTheme

    return (
        <ThemeContext.Provider value={theme}>
            <StatusBar barStyle={theme.BAR_STYLE_DEFAULT} />
            {props.children}
        </ThemeContext.Provider>
    )
};

export default ThemeProvider;