import React from 'react'
import logo from '../assets/investment-photo.png'

export const Header = () => {
  return (
    <header id='header'>
        <img src={logo} alt='logo'/>
        <h1>Investment Calculator</h1>
    </header>
  )
}
