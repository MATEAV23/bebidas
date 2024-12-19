import { lazy, Suspense } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout'
const FavouritesPage = lazy(() => import('./views/FavouritesPage'))
const IndexPage = lazy(() => import('./views/IndexPage'))

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={
                  <Suspense fallback="Cargando...">
                    <IndexPage/>
                  </Suspense>
                } index/>
                <Route path='/favoritos' element={
                  <Suspense fallback="Cargando...">
                    <FavouritesPage/>
                  </Suspense>
                }/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
