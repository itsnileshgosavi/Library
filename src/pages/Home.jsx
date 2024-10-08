import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Provider } from 'react-redux'
import appStore from '../utils/redux/appStore'

function Home() {
  return (
    <Provider store={appStore}>
      <Header />    
      <Outlet />
      <Footer />
    </Provider>
  )
}

export default Home