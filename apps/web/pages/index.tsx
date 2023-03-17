/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import Header from '../components/header'
import { useCounter } from '../hooks/counter'

const HomePage: NextPage = () => {
  const { counter } = useCounter()

  useEffect(() => {
    setTimeout(() => {
      const message = {
        data: 'Hello from the popup!',
      }

      chrome.runtime.sendMessage(message).then(console.log).catch(console.error)
    }, 1000)
  }, [])

  return (
    <div className='w-full flex flex-col gap-4 h-full max-w-xs '>
      <Header actionLabel='Edit' actionPath='/counter' />

      <div className='flex flex-col w-full space-y-2 justify-center items-start '>
        <div className='card w-full '>
          <div className={clsx('stat rounded-md', counter.background)}>
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
        </div>
      </div>
    </div>
  )
}

export default HomePage
