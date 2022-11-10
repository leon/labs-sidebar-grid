import clsx from 'clsx'
import { ComponentPropsWithoutRef, ComponentPropsWithRef, PropsWithoutRef } from 'react'

export interface InfoPanelProps extends ComponentPropsWithRef<'div'> {
  open?: boolean
  close?: () => void
}
export function InfoPanel({ open, close, className }: InfoPanelProps) {
  return (
    <div
      className={clsx(
        'grid place-content-center bg-slate-700 text-white overflow-hidden',
        // animate open
        'transition-all',
        open ? 'w-[400px]' : 'w-0',
        className,
      )}
    >
      <h2>Details</h2>
      <button className="mt-4 p-4 bg-slate-500 text-white" type="button" onClick={() => close?.()}>
        Close
      </button>
    </div>
  )
}
