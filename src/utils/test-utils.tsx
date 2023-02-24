import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {ThemeProvider} from 'react-bootstrap'

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeProvider theme="default">
            {children}
        </ThemeProvider>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}