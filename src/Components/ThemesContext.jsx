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

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, "light");

    return (
        <ThemesContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemesContext.Provider>
    );
}