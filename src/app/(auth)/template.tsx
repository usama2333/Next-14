"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import './styles.css';


  
const navLinks = [
    {name: 'Register', href: '/register'},
    {name: 'Login', href: '/login'},
    {name: 'Forgot password', href: '/forgot-password'},
]
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();
    const [input, setInput] = useState("");
    return (
        <div>
            <div>
                 {/* on layout page the state is preserved for child routes like 
                this input value is same for login , register, forgot-password*/}

                {/*In template page the state is not preserved for child routes like 
               this input value is not same for login , register, forgot-password
               It recreates new instance of componnet is mounted and 
               Dom is recreated state is not preserved and effects are re-syncronized*/}
               
                <input value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)
    
                return (
                    <Link href={link.href} key={link.name} 
                     className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                    >
                    {link.name}
                    </Link>
                )
            })}
        </div>
    )
  }
  