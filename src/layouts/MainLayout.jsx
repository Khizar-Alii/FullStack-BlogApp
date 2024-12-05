import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import styles from "./MainLayout.module.css"

const MainLayout = () => {
  return (
    <div className={styles.layoutcontainer}>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout
