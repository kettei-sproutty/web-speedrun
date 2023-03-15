import type { FC } from 'react'

export type ColorPickerProps = {
  isOpen: boolean
  changeColor: (color: string) => void
}

const ColorPicker: FC<ColorPickerProps> = ({ isOpen, changeColor }: any) => {
  if (!isOpen) return null

  const colors = {
    gray: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    red: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    yellow: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    green: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    blue: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    indigo: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    purple: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    pink: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
  }

  return (
    <div className='border border-gray-300 origin-top-right absolute left-0 top-full z-10 mt-2 rounded-md shadow-lg'>
      <div className='rounded-md bg-white shadow-xs p-2'>
        <div className='flex'>
          {Object.keys(colors).map(key => (
            <div key={key}>
              {colors[key].map((variant: string) => {
                const variantSelected = `${key}-${variant}`

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
