import { Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRouter"


export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route path="/login" element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }>
            
          </Route>

            {/* <Route path="login" element={ <LoginPage /> }></Route> */}

            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            }>
            </Route>

        </Routes>
    </>
  )
}
