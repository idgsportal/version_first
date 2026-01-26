import React, { useEffect } from 'react'
import GlobalToast from "./ui/Toast/GlobalToast"
import AppRoutes from './routes/AppRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRollSummary, isUserLoggedIn } from './redux/actions'
import { socket } from './socket/socket'



function App() {

  const { authenticate, authChecked, user, token } = useSelector(state => state.auth)
  console.log({ authenticate, authChecked, user })


  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, [dispatch]);

  useEffect(() => {
    if (user && token && !socket.connected) {
      socket.auth = { token };
      socket.connect();
    }

    // cleanup on logout
    return () => {
      if (!user && socket.connected) {
        socket.disconnect();
      }
    };
  }, [user, token]);

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
