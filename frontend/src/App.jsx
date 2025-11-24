import { useEffect } from 'react';
import './App.css'
// import Landing from './pages/landing/Landing'
import routes from './routes'
import { useRoutes } from 'react-router-dom';
import { loadTheme } from './utils/theme';

function App() {
  const router = useRoutes(routes)
  useEffect(()=>{
    loadTheme()
  },[])

  return (
    <>
    {/* <Landing/> */}
      {router}
    </>
  )
}

export default App
