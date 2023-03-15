/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useCounter } from '../hooks/counter'

const HomePage: NextPage = () => {
  const { counter } = useCounter()

  return (
    <div className='w-full h-full max-w-xs'>
      <div className='overflow-hidden relative items-center h-24 w-full'>
        <img src='/images/logo.png' alt='logo' draggable={false} className='image-full -mt-8 select-none' />
      </div>
      <div className='flex flex-col w-full space-y-2 justify-center items-start'>
        <div className='card w-full'>
          <div className={clsx('stat', counter.background)}>
            <div className={clsx('stat-figure', counter.color)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-8 h-8 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                ></path>
              </svg>
            </div>
            <div className='stat-value'>
              <span className={counter.color}>0.12</span>
            </div>
          </div>
          <div className='card-body items-center text-center'>
            <div className='card-actions'>
              <Link href='/counter' className='w-full'>
                <button className='btn w-full text-white btn-primary'>Edit Counter</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
