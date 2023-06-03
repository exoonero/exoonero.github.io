"use client"
import React from "react"

interface ChartsProps {
    children: React.ReactNode;
}

export default function Charts({children}: ChartsProps){
    return (
        <div className="flex flex-wrap gap-y-4 lg:gap-x-20 2xl:gap-x-[3%] justify-center">
          {children}
        </div>
    )
}