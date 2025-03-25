import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from '../layout'
import OnboardingLayout from '../layout/onboarding'
import Home from '../pages/home'
import AuthPage from '../pages/auth'
import ResetPassword from '../pages/auth/reset-password'

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/auth/reset-password" element={<ResetPassword />} />
        </Route>
        <Route element={<OnboardingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
