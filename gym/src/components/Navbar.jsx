import React, { useEffect, useState } from "react"
import FadeIn from "./FadeIn"

export default function Navbar() {
    return (
        <nav className={`bg-sky-950`}>
            <FadeIn children={
                <div className="container lg:w-[calc(100vw*0.8)] mx-auto flex justify-between items-center px-1 h-20">
                    <a href="">Logo</a>
                    <ul className="flex gap-2">
                        <li className="text-white border-b bold font-bold">
                            <a href="">Início</a>
                        </li>
                        <li className="text-gray-400 bold font-bold">
                            <a href="">Blog</a>

                        </li>
                        <li className="text-gray-400 bold font-bold">
                            <a href="">Login</a>
                        </li>
                    </ul>
                </div>
            } />

        </nav>
    )
} 