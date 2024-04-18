import Web3StateProvider from './context/Web3StateProvider'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
//import CandidateRegustration from './pages/CandidateRegistration/CandidateRegistration'

function App() {
  

  return (
    <>
      
      <Web3StateProvider>
        <RouterProvider router={routes}></RouterProvider>
        
       
      </Web3StateProvider>
    </>
  )
}

export default App
