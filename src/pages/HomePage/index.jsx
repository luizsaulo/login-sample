import React, { useContext } from 'react'

import { AuthContext } from '../../contexts/auth'

export default function HomePage() {
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <div>HomePage</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
