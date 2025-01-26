import { useState, useEffect } from "react"

interface ToastProps {
  title: string
  description: string
}

export function toast({ title, description }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-purple-600 text-white p-4 rounded-lg shadow-lg">
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

