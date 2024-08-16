import { Input } from '@/src/components/input'
import { render } from '@testing-library/react-native'
import React from 'react'
import { Platform } from 'react-native'

describe('Input Component', () => {
  it('should render correctly with default props', () => {
    const { getByTestId } = render(
      <Input>
        <Input.Field placeholder="Enter text" />
      </Input>,
    )

    const container = getByTestId('input-container')
    expect(container).toBeTruthy()
  })

  it('should render the Field component with correct placeholder and text color', () => {
    const { getByPlaceholderText } = render(
      <Input>
        <Input.Field placeholder="Enter text" />
      </Input>,
    )

    const inputField = getByPlaceholderText('Enter text')
    expect(inputField.props.placeholderTextColor).toBe('#a1a1aa') // zinc[400]
    expect(inputField.props.style).toContainEqual({ color: '#f4f4f5' }) // zinc[100]
  })

  it('should apply cursorColor and selectionColor correctly on iOS', () => {
    Platform.OS = 'ios'
    const { getByPlaceholderText } = render(
      <Input>
        <Input.Field placeholder="Enter text" />
      </Input>,
    )

    const inputField = getByPlaceholderText('Enter text')
    expect(inputField.props.cursorColor).toBe('#f4f4f5') // zinc[100]
    expect(inputField.props.selectionColor).toBe('#f4f4f5') // zinc[100]
  })
})
