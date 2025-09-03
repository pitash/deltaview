// File: client/src/components/layout/MainContent.tsx

import DataTable from '@/components/data-table/DataTable'
import FileUpload from '@/components/FileUpload'

interface Employee {
  id: number
  name: string
  designation: string
  department: string
}

interface MainContentProps {
  activeView: string
  employees: Employee[]
  setEmployees: (employees: Employee[]) => void
}

export default function MainContent({ activeView, employees, setEmployees }: MainContentProps) {
  const handleFileUpload = (file: File) => {
    console.log('File uploaded:', file.name)
    // Here you would typically send the file to your Node.js backend
    // Example: uploadFile(file)
  }

  const handleDeleteEmployee = (id: number) => {
    setEmployees(employees.filter(emp => emp.id !== id))
  }

  const handleEditEmployee = (id: number) => {
    console.log('Edit employee:', id)
    // Implement edit functionality
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            {activeView === 'insert' ? 'Employee Management' : 'Dashboard'}
          </h1>
        </div>
      </header>
      
      <main className="flex-1 overflow-y-auto p-6">
        {activeView === 'insert' ? (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">Employee Data</h2>
                <FileUpload onFileUpload={handleFileUpload} />
              </div>
              
              <DataTable 
                employees={employees}
                onEdit={handleEditEmployee}
                onDelete={handleDeleteEmployee}
              />
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Welcome to Dashboard</h2>
            <p className="text-gray-600">Click on "Insert" from the sidebar to manage employees.</p>
          </div>
        )}
      </main>
    </div>
  )
}