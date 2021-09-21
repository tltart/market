import c from './App.module.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import AppRoutes from './components/AppRoutes'
import Header from './components/Header/header'


function App() {
  
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Header />
          <AppRoutes />
        </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
