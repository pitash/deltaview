// File: client/src/components/layout/Sidebar.tsx

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface SidebarProps {
  activeView: string
  setActiveView: (view: string) => void
}

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      </div>
      
      <nav className="mt-6">
        <div className="px-4 space-y-2">
          <Button
            variant={activeView === 'insert' ? 'default' : 'ghost'}
            className="w-full justify-start text-left"
            onClick={() => setActiveView('insert')}
          >
            <Plus className="mr-2 h-4 w-4" />
            Insert
          </Button>
          
          {/* Future menu items can be added here */}
          <Button
            variant={activeView === 'dashboard' ? 'default' : 'ghost'}
            className="w-full justify-start text-left opacity-50 cursor-not-allowed"
            disabled
          >
            Dashboard (Coming Soon)
          </Button>
          
          <Button
            variant={activeView === 'reports' ? 'default' : 'ghost'}
            className="w-full justify-start text-left opacity-50 cursor-not-allowed"
            disabled
          >
            Reports (Coming Soon)
          </Button>
        </div>
      </nav>
    </div>
  )
}