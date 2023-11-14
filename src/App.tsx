import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import { GlobalCSS } from './styles'

import Routes from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <div className="container">
          <Header />
        </div>
        <Routes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
