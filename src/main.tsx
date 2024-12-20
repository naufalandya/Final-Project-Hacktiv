import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider Redux
import { store } from './redux/store'; // Import Redux store

import App from './App';
import './index.css';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}> {/* Bungkus dengan Provider */}
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
