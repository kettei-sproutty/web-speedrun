import ColorPicker from '../components/color-picker'
import { MouseEvent, FocusEvent, useState } from 'react'
import type { NextPage } from 'next'
import { ActionTypeEnum, useCounter } from '../hooks/counter'

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
    <div className='w-full h-full px-4 max-w-xs'>
      <label htmlFor='counter-position' className='label'>
        <span className='label-text text-primary'>Counter Position</span>
      </label>
      <select
        name='position'
        onClick={handleChange}
        className='select select-primary w-full max-w-xs'
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
      <label htmlFor='color' className='label'>
        <span className='label-text'>Color</span>
      </label>
      <div className='flex flex-row relative'>
        <div id='color' onClick={handleOpen} className={`w-full h-8 max-w-xs bg-${counter.color}`} />
        <ColorPicker
          isOpen={colorModal.color}
          changeColor={payload => {
            dispatch({ type: ActionTypeEnum.CHANGE_COLOR, payload })
            setColorModal({ ...colorModal, color: false })
          }}
        />
      </div>
      <label htmlFor='background-color' className='label'>
        <span className='label-text'>Background Color</span>
      </label>
      <div className='flex flex-row relative'>
        <div id='background' onClick={handleOpen} className={`w-full h-8 max-w-xs bg-${counter.background}`} />
        <ColorPicker
          isOpen={colorModal.background}
          changeColor={payload => {
            dispatch({ type: ActionTypeEnum.CHANGE_BACKGROUND, payload })
            setColorModal({ ...colorModal, background: false })
          }}
        />
      </div>
      <div className='label'>
        <label className='label-text'>Preview</label>
      </div>
      <div className={`w-full text-center bg-${counter.background} text-${counter.color}`}>
        <span className='text-4xl'>1.12</span>
      </div>
    </div>
  )
}

export default HomePage
