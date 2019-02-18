import React from 'react'

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#27AE60'}} className="text-white p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} myCrops
    </footer>
  )
}
