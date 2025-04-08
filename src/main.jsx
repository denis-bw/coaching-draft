import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.js';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux/theme/themeSlice.js';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import { ToastContainer} from "react-toastify";

function AppWrapper() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ToastContainer/>
        <App />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/coaching-draft/">
            <AppWrapper />
          </BrowserRouter>  
      </PersistGate>
    </Provider>,
);
