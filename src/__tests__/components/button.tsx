import { Button } from '@/src/components/button'
import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { zinc } from 'tailwindcss/colors'

describe('Button Component', () => {
  it('should render correctly with default props', () => {
    const { getByText } = render(
      <Button>
        <Button.Title>Press Me</Button.Title>
      </Button>,
    )

    const button = getByText('Press Me')
    expect(button).toBeTruthy()
  })

  it('should render the loading indicator when isLoading is true', () => {
    const { getByTestId } = render(
      <Button isLoading>
        <Button.Title>Loading Button</Button.Title>
      </Button>,
    )

    const loader = getByTestId('activity-indicator')
    expect(loader).toBeTruthy()
  })

  it('should disable the button when isLoading is true', () => {
    const { getByTestId } = render(
      <Button isLoading>
        <Button.Title>Loading Button</Button.Title>
      </Button>,
    )

    const loader = getByTestId('activity-indicator')
    expect(loader).toBeTruthy()
  })

  it('should not call onPress when isLoading is true', () => {
    const onPressMock = jest.fn()
    const { getByTestId } = render(
      <Button isLoading onPress={onPressMock}>
        <Button.Title>Loading Button</Button.Title>
      </Button>,
    )

    const button = getByTestId('button')

    fireEvent.press(button)
    expect(onPressMock).not.toHaveBeenCalled()
  })

  it('should render the Title component with correct variant styles', () => {
    const { getByText } = render(
      <Button variant="secondary">
        <Button.Title>Button Title</Button.Title>
      </Button>,
    )

    const title = getByText('Button Title')
    expect(title.props.style).toContainEqual({ color: zinc[200] })
  })
})
