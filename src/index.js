import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {StrictMode} from "react";
import {Provider} from "react-redux";

import App from './App';
import store from "./store/store";

import './assets/output.css';
import './assets/main.css';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </StrictMode>
)