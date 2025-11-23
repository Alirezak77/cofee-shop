import './App.css'
// import Landing from './pages/landing/Landing'
import routes from './routes'
import { useRoutes } from 'react-router-dom';

function App() {
  const router = useRoutes(routes)

  return (
    <>
    {/* <Landing/> */}
      {router}
    </>
  )
}

export default App
