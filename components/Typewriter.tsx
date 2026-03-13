"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseTime = 1200,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentWord = words[wordIndex];
  let timeout: NodeJS.Timeout;

  if (!isDeleting && text !== currentWord) {
    // escribiendo
    timeout = setTimeout(() => {
      setText(currentWord.slice(0, text.length + 1));
    }, typingSpeed);

  } else if (!isDeleting && text === currentWord) {
    // pausa antes de borrar
    timeout = setTimeout(() => {
      setIsDeleting(true);
    }, pauseTime);

  } else if (isDeleting && text !== "") {
    // borrando
    timeout = setTimeout(() => {
      setText(currentWord.slice(0, text.length - 1));
    }, deletingSpeed);

  } else if (isDeleting && text === "") {
    // siguiente palabra
    setIsDeleting(false);
    setWordIndex((i) => (i + 1) % words.length);
  }

  return () => clearTimeout(timeout);
}, [
  text,
  isDeleting,
  wordIndex,
  words,
  typingSpeed,
  deletingSpeed,
  pauseTime,
]);


 return (
  <span className="inline-flex items-baseline">
    <span className="inline-block">
      {text}
    </span>

    <span
      className="ml-[0.1ch] animate-pulse font-normal"
      aria-hidden
    >
      |
    </span>
  </span>
);


}
