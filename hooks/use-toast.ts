"use client"

// This is a simplified version. In a real project, you'd use a proper toast library
import { useState } from "react"

type ToastProps = {
  title: string
  description?: string
  type?: "default" | "success" | "error" | "warning"
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { ...props, id }
    setToasts((prev) => [...prev, newToast])

    if (props.duration !== Number.POSITIVE_INFINITY) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, props.duration || 3000)
    }

    return id
  }

  return { toast, toasts }
}
