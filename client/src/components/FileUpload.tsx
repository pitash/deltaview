// File: client/src/components/FileUpload.tsx
"use client"
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Upload, File } from 'lucide-react'

interface FileUploadProps {
  onFileUpload: (file: File) => void
}

export default function FileUpload({ onFileUpload }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      onFileUpload(file)
    }
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragging(false)
    
    const file = event.dataTransfer.files[0]
    if (file) {
      setSelectedFile(file)
      onFileUpload(file)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragging
            ? 'border-blue-400 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
        
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500">CSV, XLSX, XLS files only</p>
      </div>

      {selectedFile && (
        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
          <File className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700 flex-1">{selectedFile.name}</span>
          <span className="text-xs text-gray-500">
            {(selectedFile.size / 1024).toFixed(1)} KB
          </span>
        </div>
      )}

      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleClick}
        className="flex items-center gap-2"
      >
        <Upload className="h-4 w-4" />
        Upload File
      </Button>
    </div>
  )
}