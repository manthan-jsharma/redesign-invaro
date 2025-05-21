"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  children: React.ReactNode
  className?: string
}

export function FeatureCard({ children, className }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "flex flex-col items-start space-y-2 rounded-lg border p-6 transition-all duration-300",
        isHovered ? "border-primary/50 shadow-lg transform -translate-y-1" : "border-border",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}
