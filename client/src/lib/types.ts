// File: client/src/lib/types.ts

export interface Employee {
  id: number
  name: string
  designation: string
  department: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface FileUploadResponse {
  filename: string
  size: number
  mimetype: string
  url?: string
}