import ButtonAppBar from './components/NavBar'
import BasicImageList from './components/Menu'

import Header from './components/Header/header_video'
import c from './App.module.css'


function App() {
  const items = [{ value: "Главная", href: "/", id: 1 }, { value: "Кексы", href: "/keks", id: 2 }, { value: "Зефир", href: "/zefir", id: 3 }, { value: "Торты", href: "/tort", id: 4 }]
  return (
    <div className={c.main}>
      <ButtonAppBar items={items} />
      <Header />
      <BasicImageList />
    </div>
  );
}

export default App;
