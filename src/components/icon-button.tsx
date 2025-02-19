import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'bg-gray-500 p-1.5 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900',
        className
      )}
      {...props}
    />
  )
}
