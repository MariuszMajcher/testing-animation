'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Props {
  characters: string[];
}

export default function Page({ characters }: Props) {
  const [left, setLeft] = useState(false);

  const clicked = () => {
    setLeft(!left);
  };

  return (
    <nav>
      <Link
        href="/"
        className={`square ${left ? 'left' : ''}`}
        onClick={clicked}
        style={{
          transform: left
            ? `rotate(${30}deg) translate(${!left ? '1em' : '10em'}) rotate(${-90}deg)`
            : `rotate(${15 * 1.5}deg) translate(${!left ? '3em' : '12em'})`
        }}
      ></Link>
      <Link
        href="/about"
        className={`square2 ${!left ? 'left' : ''}`}
        onClick={clicked}
        style={{
          transition: 'all 3s ease-in-out'
        }}
      >
        {characters.map((char: string, index: number) => {
          const angle = left ? (100 / characters.length) * index + 120 : 0;

          return (
            <span
              key={index}
              className={`character ${left ? 'active' : ''} ${!left ? 'noncircular' : ''}`}
              style={{
                transform: left
                  ? `rotate(${angle}deg) translate(${!left ? '1em' : '10em'}) rotate(${-90 + angle}deg)`
                  : `rotate(${angle * 1.5}deg) translate(${!left ? `${index * 2}em` : `${index * 10}em`})`
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
