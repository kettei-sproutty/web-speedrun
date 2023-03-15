import React, { type ReactElement, Fragment } from 'react'
import type { ChildrenProps } from '../typings/react'
import rootMetadata from './metadata'

import './main.css'

export const metadata = rootMetadata

type LayoutComponent<T = {}> = (props: T) => ReactElement<any, any>

const Layout: LayoutComponent<ChildrenProps> = ({ children }) => {
  return (
    <html lang='en' data-theme='dark'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout
