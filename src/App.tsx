import { useEffect } from 'react'
import AllRoutes from './routes'

const App = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp
    tg.ready()
    tg.expand()
  }, [])

  return <AllRoutes />
}

export default App
