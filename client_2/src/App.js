import c from './App.module.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import AppRoutes from './components/AppRoutes'
import Header from './components/Header/header'
import Footer from './components/common/Footer/footer'

function App() {
  
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
