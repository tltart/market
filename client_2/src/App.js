import ButtonAppBar from './components/NavBar'
import BasicImageList from './components/Menu'
import Header from './components/Header/header_video'
import c from './App.module.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/store/store'


function App() {
  const items = [{ value: "Главная", href: "/", id: 1 }, { value: "Кексы", href: "/keks", id: 2 }, { value: "Зефир", href: "/zefir", id: 3 }, { value: "Торты", href: "/tort", id: 4 }]
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={c.main}>
          <ButtonAppBar items={items} />
          <Header />
          <BasicImageList />
        </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
