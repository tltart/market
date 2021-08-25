import c from './App.module.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import AppRoutes from './components/AppRoutes'


function App() {
  const items = [{ value: "Главная", href: "/", id: 1 }, { value: "Кексы", href: "/keks", id: 2 }, { value: "Зефир", href: "/zefir", id: 3 }, { value: "Торты", href: "/tort", id: 4 }]
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>

  );
}

export default App;
