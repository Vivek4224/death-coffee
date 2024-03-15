import { ToastContainer } from 'react-toastify'
import './App.css'
import Router from './router/Router'

function App() {

  return (
    <>
      <Router />
      <ToastContainer
        closeOnClick={false} />
    </>
  )
}

export default App
