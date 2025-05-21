"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  children: React.ReactNode
  className?: string
}

export function AnimatedButton({
  variant = "default",
  size = "default",
  children,
  className,
  ...props
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "relative overflow-hidden transition-all duration-300 ease-out",
        isHovered ? "shadow-lg scale-105" : "",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "default" && (
        <span
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-transform duration-300",
            isHovered ? "scale-110" : "scale-100",
          )}
          style={{ zIndex: 0 }}
        />
      )}
    </Button>
  )
}
