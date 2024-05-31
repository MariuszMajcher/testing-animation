'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Page() {

    const [left, setLeft] = useState(false)
    const characters : string[] = ["a", "b", "a", "b", "a", "b", "a", "b"]
    const clicked = () => {
        setLeft(!left)
    }
    return (
        // NEXT THING TO TEST WILL BE TO CHECK IF THE ANIMATION HAPPENS ON OBJECTS THAT ARE GENERATED USING MAP, IF THAT DOES NOT WORK I CAN CREATE A COMPONENT THAT WILL HOLD EACH LETTER SEPARATELY
        <nav>
        <Link href="/" className={`square ${left ?  'left' : ''}`} onClick={clicked}
         style={{
            transform: left ? `rotate(${30}deg) translate(${!left ? '1em' : '10em'}) rotate(${ -90  }deg)` : `rotate(${15*1.5}deg) translate(${!left ?  '3em' : '12em'})`
        }}>

        </Link>
         <Link href="/about" className={`square2 ${!left ?  'left' : ''}`} onClick={clicked}>
         {characters.map((char: string, index) => {
        const angle = left ? (100 / characters.length) * index + (120) : 0;

        return (
          <span
            key={index}
            className={`${"character"} ${left ? "active" : ''} ${!left ? "noncircular" : ''}`}
            style={{
              transform: 
              left ? `rotate(${angle}deg) 
              translate(${!left ? '1em' : '10em'}) 
              rotate(${ -90 + angle  }deg)` 
              : `rotate(${angle*1.5}deg) translate(${!left ?  `${index *2}em` : `${index * 10}em`})`,
              transition: 'all 3s ease-in-out'
             
            }}
          >
            {char}
          </span>
        );
      })}
         </Link>
         </nav>
    );
}