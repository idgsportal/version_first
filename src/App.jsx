import React, { useEffect } from 'react'
import GlobalToast from "./ui/Toast/GlobalToast"
import AppRoutes from './routes/AppRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRollSummary, isUserLoggedIn } from './redux/actions'


function App() {

  const { authenticate, authChecked, user } = useSelector(state => state.auth)
  console.log({ authenticate, authChecked, user })

  const dispatch = useDispatch()

  useEffect(() => {
    if (!authChecked) {
      dispatch(isUserLoggedIn());
    }
  }, [authChecked, dispatch]);

  useEffect(() => {
    if (authenticate && user.role === "admin") {
      dispatch(fetchAllRollSummary());
    }
  }, [authenticate, dispatch]);

  return (
    <>
      <GlobalToast />
      <AppRoutes />
    </>
  )
}

export default App
