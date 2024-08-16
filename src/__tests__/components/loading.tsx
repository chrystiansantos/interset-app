import { Loading } from '@/src/components/loading'
import { render } from '@testing-library/react-native'
import React from 'react'
import colors from 'tailwindcss/colors'

describe('Loading Component', () => {
  it('should render the ActivityIndicator', () => {
    const { getByTestId } = render(<Loading />)

    const loader = getByTestId('activity-indicator')
    expect(loader).toBeTruthy()
  })

  it('should have correct color and size', () => {
    const { getByTestId } = render(<Loading />)

    const loader = getByTestId('activity-indicator')
    expect(loader.props.color).toBe(colors.blue[300])
    expect(loader.props.size).toBe(40)
  })

  it('should be centered within the View', () => {
    const { getByTestId } = render(<Loading />)

    const container = getByTestId('loading-container')
    const style = container.props.style

    expect(style).toContainEqual({ justifyContent: 'center' })
    expect(style).toContainEqual({ alignItems: 'center' })
  })
})
