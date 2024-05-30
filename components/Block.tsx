'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Page() {

    const [left, setLeft] = useState(false)

    const clicked = () => {
        setLeft(!left)
    }
    return (
        <nav>
        <Link href="/" className={`square ${left ?  'left' : ''}`} onClick={clicked}
         style={{
            transform: left ? `rotate(${30}deg) translate(${!left ? '1em' : '10em'}) rotate(${ -90  }deg)` : `rotate(${15*1.5}deg) translate(${!left ?  '3em' : '12em'})`
        }}>

        </Link>
         <Link href="/about" className={`square2 ${!left ?  'left' : ''}`} onClick={clicked}>

         </Link>
         </nav>
    );
}