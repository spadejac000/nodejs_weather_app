import React from 'react'

function Footer() {
  return (
    <footer className="bg-info text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Weather App
    </footer>
  )
}

export default Footer;
