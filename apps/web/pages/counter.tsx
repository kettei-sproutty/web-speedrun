import ColorPicker from '../components/color-picker'
import { MouseEvent, FocusEvent, useState } from 'react'
import type { NextPage } from 'next'
import { ActionTypeEnum, useCounter } from '../hooks/counter'
import Link from 'next/link'
import Header from '../components/header'

type Color = {
  open: boolean
  value: string
}

type Counter = {
  position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  color: Color
  background: Color
}

const HomePage: NextPage = () => {
  const { counter, dispatch } = useCounter()
  const [colorModal, setColorModal] = useState({ color: false, background: false })

  const handleChange = (event: MouseEvent<HTMLSelectElement> | FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget

    switch (name) {
      case 'position':
        return dispatch({ type: ActionTypeEnum.CHANGE_POSITION, payload: value as Counter['position'] })
      case 'color':
        return dispatch({ type: ActionTypeEnum.CHANGE_COLOR, payload: value as Counter['color']['value'] })
      case 'background':
        return dispatch({ type: ActionTypeEnum.CHANGE_BACKGROUND, payload: value as Counter['background']['value'] })
    }
  }

  const handleOpen = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.getAttribute('id')

    setColorModal({ ...colorModal, [id]: !colorModal[id] })
  }

  return (
    <div className='w-full flex flex-col gap-4 h-full max-w-xs '>
      <Header actionLabel='back' actionPath='/' />

      {/* select */}
      <div>
        <label htmlFor='counter-position' className='label'>
          <span className='label-text text-white uppercase'>Counter Position</span>
        </label>
        <select
          name='position'
          onClick={handleChange}
          className='select border-secondary w-full  max-w-xs uppercase'
          id='position'
          value={counter.position}
        >
          <option value={'top-left'}>Top Left</option>
          <option value={'top-center'}>Top Center</option>
          <option value={'top-right'}>Top Right</option>
          <option value={'bottom-left'}>Bottom Left</option>
          <option value={'bottom-center'}>Bottom Center</option>
          <option value={'bottom-right'}>Bottom Right</option>
        </select>
      </div>

      {/* color pickers */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <label htmlFor='color' className='label'>
            <span className='label-text uppercase'>Text</span>
          </label>
          <div className='flex flex-row relative'>
            <div id='color' onClick={handleOpen} className={`h-6 w-6 rounded-full  border-2  bg-${counter.color}`} />
            <ColorPicker
              isOpen={colorModal.color}
              changeColor={payload => {
                dispatch({ type: ActionTypeEnum.CHANGE_COLOR, payload })
                setColorModal({ ...colorModal, color: false })
              }}
            />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <label htmlFor='background-color' className='label'>
            <span className='label-text uppercase'>Background</span>
          </label>
          <div className='flex flex-row relative'>
            <div
              id='background'
              onClick={handleOpen}
              className={`h-6 w-6 rounded-full border-2  bg-${counter.background}`}
            />
            <ColorPicker
              isOpen={colorModal.background}
              changeColor={payload => {
                dispatch({ type: ActionTypeEnum.CHANGE_BACKGROUND, payload })
                setColorModal({ ...colorModal, background: false })
              }}
            />
          </div>
        </div>
      </div>

      {/* preview */}
      <div>
        {/* <div className='label'>
          <label className='label-text'>Preview</label>
        </div> */}
        <div className={`w-full text-center h-10  rounded-md bg-${counter.background} text-${counter.color}`}>
          <span className='text-3xl'>1.12</span>
        </div>
      </div>
    </div>
  )
}

export default HomePage
