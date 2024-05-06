import React from 'react'
import './App.css'
import Counter from './components/Counter/Counter'
import { Provider } from 'react-redux'
import store from './redux/Redux'
const App = () => {
  return (
    <Provider  store={store} >
    <div>
          <h1>This is Redux </h1>
          <Counter/>
    </div>
    </Provider>
  )
}

export default App