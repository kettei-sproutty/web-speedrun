import { useState } from 'react'
import ColorPicker from '../components/color-picker'
import type { MouseEvent, FocusEvent } from 'react'
import type { NextPage } from 'next'

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
  const [counter, setCounter] = useState<Counter>({
    position: 'top-left',
    color: {
      open: false,
      value: 'white',
    },
    background: {
      open: false,
      value: 'black',
    },
  })

  const handleChange = (event: MouseEvent<HTMLSelectElement> | FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget

    setCounter({ ...counter, [name]: value as unknown })
  }

  const handleOpen = (event: MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.getAttribute('id')
    const value = { ...counter[id], open: !counter[id].open }

    setCounter({ ...counter, [id]: value })
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
        id='counter-position'
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
        <div id='color' onClick={handleOpen} className={`w-full h-8 max-w-xs bg-${counter.color.value}`} />
        <ColorPicker
          isOpen={counter.color.open}
          changeColor={(color: string) => setCounter({ ...counter, color: { open: false, value: color } })}
        />
      </div>
      <label htmlFor='background-color' className='label'>
        <span className='label-text'>Background Color</span>
      </label>
      <div className='flex flex-row relative'>
        <div id='background' onClick={handleOpen} className={`w-full h-8 max-w-xs bg-${counter.background.value}`} />
        <ColorPicker
          isOpen={counter.background.open}
          changeColor={(color: string) => setCounter({ ...counter, background: { open: false, value: color } })}
        />
      </div>
      <div className='label'>
        <label className='label-text'>Preview</label>
      </div>
      <div className={`w-full text-center bg-${counter.background.value} text-${counter.color.value}`}>
        <span className='text-4xl'>1.12</span>
      </div>
    </div>
  )
}

export default HomePage
