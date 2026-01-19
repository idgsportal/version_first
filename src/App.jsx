import React, { useEffect } from 'react'
import GlobalToast from "./ui/Toast/GlobalToast"
// import { Navigate, Route, Routes } from 'react-router-dom'
// import LoginPage from "./auth/page/LoginPage"
import Layout from './admin/layout/Layout'
import AppRoutes from './routes/AppRoutes'
import { useDispatch } from 'react-redux'
import { isUserLoggedIn } from './redux/actions'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, [dispatch]);
  return (
    <>
      <GlobalToast />
      <AppRoutes />
    </>
  )
}

export default App
