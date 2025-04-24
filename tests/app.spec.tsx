import React from 'react'
import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/react-native'

import { App } from '#/App'

describe('App Tests', () => {
  it('renders correctly', () => {
    render(<App />)

    expect(true).toBeTruthy()
  })
})
