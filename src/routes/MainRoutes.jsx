import { Routes, Route } from 'react-router-dom'
import { pages } from '../config/data'
const MainRoutes = () => {
  return (
    <Routes>
      {pages.map((page) => (
        <Route key={page.id} path={page.path} element={<page.element />} />
      ))}
    </Routes>
  )
}

export default MainRoutes
