import { Modal } from '@/src/components/modal'
import { render } from '@testing-library/react-native'
import React from 'react'
import { Text } from 'react-native'

describe('Modal Component', () => {
  it('should render correctly with title and children', () => {
    const { getByText } = render(
      <Modal visible={true} title="Test Modal">
        <Text>Modal Content</Text>
      </Modal>,
    )

    expect(getByText('Test Modal')).toBeTruthy()
    expect(getByText('Modal Content')).toBeTruthy()
  })

  it('should render subtitle if provided', () => {
    const { getByText } = render(
      <Modal visible={true} title="Test Modal" subtitle="This is a subtitle">
        <Text>Modal Content</Text>
      </Modal>,
    )

    expect(getByText('This is a subtitle')).toBeTruthy()
  })

  it('should not render subtitle if not provided', () => {
    const { queryByText } = render(
      <Modal visible={true} title="Test Modal">
        <Text>Modal Content</Text>
      </Modal>,
    )

    expect(queryByText('This is a subtitle')).toBeNull()
  })

  it('should not render close button if onClose is not provided', () => {
    const { queryByRole } = render(
      <Modal visible={true} title="Test Modal">
        <Text>Modal Content</Text>
      </Modal>,
    )

    expect(queryByRole('button')).toBeNull()
  })
})
