import { createContext, useReducer } from "react";

export const ThemesContext = createContext();

function themeReducer(state, action) {
    switch (action.type) {
        case "toggle":
            return state === "light" ? "dark" : "light";
        case "setTheme":
            return action.payload;
        default:
            return state;
    }
}

const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, "dark");

    return (
        <ThemesContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemesContext.Provider>
    );
}

export default ThemeProvider;