import React from 'react'

function MainLayout({children}) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  )
}

export default MainLayout