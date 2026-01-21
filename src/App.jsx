import React, { useEffect } from 'react'
import GlobalToast from "./ui/Toast/GlobalToast"
import AppRoutes from './routes/AppRoutes'
import { useDispatch } from 'react-redux'
import { fetchAllRollSummary, isUserLoggedIn } from './redux/actions'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllRollSummary());
  }, [fetchAllRollSummary]);
  return (
    <>
      <GlobalToast />
      <AppRoutes />
    </>
  )
}

export default App
