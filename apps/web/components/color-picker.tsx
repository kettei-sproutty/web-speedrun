import type { FC } from 'react'

export type ColorPickerProps = {
  isOpen: boolean
  changeColor: (color: string) => void
}

const ColorPicker: FC<ColorPickerProps> = ({ isOpen, changeColor }: any) => {
  if (!isOpen) return null

  const colors = {
    gray: ['100', '500', '900'],
    primary: ['', 'focus', 'content'],
    secondary: ['', 'focus', 'content'],
    accent: ['', 'focus', 'content'],
    red: ['500', '700', '900'],
    yellow: ['500', '700', '900'],
    green: ['500', '700', '900'],
    indigo: ['500', '700', '900'],
  }

  return (
    <div className='border border-gray-300 origin-top-right absolute left-0 top-full z-10 mt-2 rounded-md shadow-lg'>
      <div className='rounded-md bg-white shadow-xs p-2'>
        <div className='flex'>
          {Object.keys(colors).map(key => (
            <div key={key}>
              {colors[key].map((variant: string) => {
                const variantSelected = variant ? `${key}-${variant}` : key

                return (
                  <div
                    onClick={() => changeColor(variantSelected)}
                    key={variantSelected}
                    className={`cursor-pointer w-6 h-6 rounded-full mx-1 my-1 bg-${variantSelected}`}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
