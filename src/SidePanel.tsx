import clsx from 'clsx'
import { ComponentPropsWithoutRef, ComponentPropsWithRef, PropsWithoutRef } from 'react'

export interface SidePanelProps extends ComponentPropsWithRef<'div'> {
  open?: boolean
  openInfo: () => void
}
export function SidePanel({ open, openInfo, className }: SidePanelProps) {
  return (
    <div
      className={clsx(
        'grid place-content-center bg-slate-900 text-white overflow-hidden',
        // animate open
        'transition-all',
        open ? 'w-[320px]' : 'w-0',
        className,
      )}
    >
      <h2>Sidebar</h2>
      <button
        className="mt-4 p-4 bg-slate-500 text-white"
        type="button"
        onClick={() => openInfo?.()}
      >
        Open info
      </button>
    </div>
  )
}
