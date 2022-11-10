import clsx from 'clsx'
import { ComponentPropsWithoutRef, PropsWithoutRef, useEffect, useState } from 'react'

export interface BarProps extends ComponentPropsWithoutRef<'div'> {
  toggleOpen: (open: boolean) => void
}
export function Bar({ toggleOpen, className }: BarProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    toggleOpen?.(open)
  }, [open])

  return (
    <nav className={clsx('absolute bottom-0 place-self-center', className)}>
      <button
        type="button"
        className="p-4 bg-slate-700 text-white"
        onClick={() => setOpen((open) => !open)}
      >
        Menu
      </button>
    </nav>
  )
}
