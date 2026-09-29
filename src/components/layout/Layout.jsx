import React from 'react'
import Navbar from '../layout/Navbar'
import Sidebar from '../layout/Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <div>
      <Sidebar/>
      <section>
        {children}
      </section>
      </div>
    </div>
  )
}

export default Layout
