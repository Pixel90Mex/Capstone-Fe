import React from 'react'
import UserNavigationBar from './UserNavigationBar'

const Layout = ({children}) => { //permette di riconoscere come figli tutti i componenti che passiamo al layout
  return (                      //tutto ciò che andremo a passare all'interno dei tag layout farà parte delle navbar e del footer
    <>
    <UserNavigationBar/>
    {children}
    </>
  )
}

export default Layout