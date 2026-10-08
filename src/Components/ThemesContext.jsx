import { createContext, useEffect, useReducer } from 'react';

export const ThemesContext = createContext();
const THEME_STORAGE_KEY = 'shopskart-theme';

function themeReducer(state, action) {
    switch (action.type) {
        case 'toggle':
            return state === 'light' ? 'dark' : 'light';
        case 'setTheme':
            return action.payload;
        default:
            return state;
    }
}

const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, undefined, () => {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';
    });

    useEffect(() => {
        localStorage.setItem(THEME_STORAGE_KEY, state);
    }, [state]);

    return <ThemesContext.Provider value={{ state, dispatch }}>{children}</ThemesContext.Provider>;
};

export default ThemeProvider;
