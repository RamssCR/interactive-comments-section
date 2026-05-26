import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import VoteCounter from '@components/ui/voteCounter'

describe('VoteCounter', () => {
  test('muestra el conteo inicial y botones habilitados', () => {
    render(<VoteCounter />)

    expect(screen.getByText('12')).toBeTruthy()

    const plusButton = screen.getByRole('button', { name: '+' })
    const minusButton = screen.getByRole('button', { name: '-' })

    expect(plusButton).not.toBeDisabled()
    expect(minusButton).not.toBeDisabled()
  })

  test('maneja el flujo de incremento correctamente', () => {
    render(<VoteCounter />)

    const plusButton = screen.getByRole('button', { name: '+' })
    const minusButton = screen.getByRole('button', { name: '-' })

    fireEvent.click(plusButton)

    expect(screen.getByText('13')).toBeTruthy()
    expect(plusButton).toBeDisabled()
    expect(minusButton).not.toBeDisabled()
  })

  test('maneja el flujo de decremento correctamente', () => {
    render(<VoteCounter />)

    const plusButton = screen.getByRole('button', { name: '+' })
    const minusButton = screen.getByRole('button', { name: '-' })

    fireEvent.click(minusButton)

    expect(screen.getByText('11')).toBeTruthy()
    expect(plusButton).not.toBeDisabled()
    expect(minusButton).toBeDisabled()
  })
})
