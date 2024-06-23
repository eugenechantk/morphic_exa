'use client'

import { cn } from '@/lib/utils'

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <circle cx="128" cy="128" r="128" fill="black"></circle>
      <circle cx="102" cy="128" r="18" fill="white"></circle>
      <circle cx="154" cy="128" r="18" fill="white"></circle>
    </svg>
  )
}

const ExaBlackLogo = ({ className, ...props }: React.ComponentProps<'svg'>) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-4 w-4', className)}
    {...props}
  >
    <path
      d="M0 2C0 0.895431 0.895431 0 2 0H62C63.1046 0 64 0.895431 64 2V62C64 63.1046 63.1046 64 62 64H2C0.895431 64 0 63.1046 0 62V2Z"
      fill="#191919"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.0957 10.3784H48.9041V13.6055L34.4758 32L48.9041 50.3946V53.6217H15.0957V10.3784ZM32.2125 29.0237L43.9371 13.6055H20.4879L32.2125 29.0237ZM18.8994 17.4693V30.3865H28.7221L18.8994 17.4693ZM28.7221 33.6136H18.8994V46.5308L28.7221 33.6136ZM20.4879 50.3946L32.2125 34.9764L43.9371 50.3946H20.4879Z"
      fill="white"
    />
  </svg>
)

export { ExaBlackLogo, IconLogo }
