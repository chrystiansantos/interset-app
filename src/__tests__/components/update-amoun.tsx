import { UpdateAmount } from '@/src/components/update-amount'
import { render } from '@testing-library/react-native'
import React from 'react'

describe('UpdateAmount Component', () => {
  it('should render correctly with the given amount', () => {
    const { getByText } = render(
      <UpdateAmount amount={5} handleUpdateQuantityBuyProduct={jest.fn()} />,
    )

    expect(getByText('5')).toBeTruthy()
  })
})
