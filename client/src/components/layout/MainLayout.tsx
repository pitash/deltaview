// File: client/src/components/layout/MainLayout.tsx
"use client"
import { useState } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

export default function MainLayout() {
  const [activeView, setActiveView] = useState('dashboard')
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', designation: 'Software Engineer', department: 'IT' },
    { id: 2, name: 'Jane Smith', designation: 'Product Manager', department: 'Product' },
    { id: 3, name: 'Mike Johnson', designation: 'Designer', department: 'Design' }
  ])

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
      />
      <MainContent 
        activeView={activeView}
        employees={employees}
        setEmployees={setEmployees}
      />
    </div>
  )
}