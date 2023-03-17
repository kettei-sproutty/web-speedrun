import Link from 'next/link'
import type { FC } from 'react'

export type HeaderProps = {
  actionPath: string
  actionLabel: string
}

const Header: FC<HeaderProps> = ({ actionLabel, actionPath }: any) => {
  return (
    <div className='flex justify-between items-center h-12'>
      <div className='rounded-full h-12 w-12 bg-primary text-white flex justify-center items-center text-2xl'>SR</div>

      <Link href={actionPath} className='w-10 '>
        <button className='btn btn-sm w-full  text-secondary btn-ghost'>{actionLabel}</button>
      </Link>
    </div>
  )
}

export default Header
