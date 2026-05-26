import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Replies from '@components/ui/Replies'

describe('Replies', () => {
  test('muestra mensaje si no hay respuestas', () => {
    const comment = { replies: [] }

    render(<Replies comment={comment} />)

    expect(
      screen.getByText('Este comentario no tiene respuestas.'),
    ).toBeTruthy()
  })

  test('renderiza una lista de respuestas', () => {
    const comment = {
      replies: [
        {
          id: 1,
          content: 'Hola! Respuesta 1',
          createdAt: '1 week ago',
          user: {
            username: 'user-1',
            image: { png: '/img/user-1.png', webp: '/img/user-1.webp' },
          },
        },
      ],
    }

    render(<Replies comment={comment} />)

    expect(screen.getByText('user-1')).toBeTruthy()
    expect(screen.getByText('Hola! Respuesta 1')).toBeTruthy()
  })
})
