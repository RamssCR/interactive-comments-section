import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import CommentItem from '@components/ui/CommentItem'

const baseItem = {
  id: 1,
  content: 'Test comment',
  createdAt: '1 month ago',
  score: 12,
  user: {
    username: 'juliusomo',
    image: { png: '/img/juliusomo.png', webp: '/img/juliusomo.webp' },
  },
  replies: [
    {
      id: 2,
      content: 'Test reply',
      createdAt: '1 week ago',
      score: 1,
      replyingTo: 'juliusomo',
      user: {
        username: 'reply-user',
        image: { png: '/img/reply-user.png', webp: '/img/reply-user.webp' },
      },
    },
  ],
}

describe('CommentItem', () => {
  test('renderiza datos del comentario y muestra/oculta Replies', () => {
    render(<CommentItem item={baseItem} />)

    expect(screen.getByText('juliusomo')).toBeTruthy()

    expect(screen.getByText('Test comment')).toBeTruthy()

    // Replies no debería estar visible por defecto
    expect(screen.queryByText('Test reply')).toBeNull()

    fireEvent.click(screen.getByText('Show replies'))
    expect(screen.getByText('Test reply')).toBeTruthy()

    fireEvent.click(screen.getByText('Show replies'))
    expect(screen.queryByText('Test reply')).toBeNull()
  })
})
