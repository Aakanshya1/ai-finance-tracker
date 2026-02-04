import React from 'react'

function Button({text,isPrimary}) {
  return (
    <button className={isPrimary?'bg-primary cursor-pointer font-bold inter rounded-md px-3 text-white py-2 hover:bg-muted delay-75 ':'bg-background font-bold inter border px-3 py-2 rounded-md w-fit cursor-pointer hover:bg-primary/20'}>{text}</button>
  )
}

export default Button