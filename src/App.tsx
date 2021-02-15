import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './utils/usePersistedState';
import themes from './styles/themes/index';
import ThemeContext from './context/Theme';

import GlobalStyle from './styles/global';
import Routes from './routes';


const App: React.FC = () =>{
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', themes.light);

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? themes.dark : themes.light);
    }

    return (
        <>
            <ThemeContext.Provider value={{
                switchTheme: toggleTheme,
            }}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routes />
                    </BrowserRouter>
                    <GlobalStyle/>
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    );
}


export default App;
