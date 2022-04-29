// import dependencies
import React from 'react'

// import react-testing methods
import { render, screen } from '@testing-library/react'

// the component to test
import Counter from '../Counter'

describe('Counter component', () => {
  test('Value is initially "0"', () => {
    // Arrange
    render(<Couter />)

    // Act
    const text = screen.findByText("0")

    // Assert
    expect(text).toBeInTheDocument()
  })
})
