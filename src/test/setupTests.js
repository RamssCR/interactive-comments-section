import { afterEach, expect } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
})

// Minimal helpers without jest-dom dependency
expect.extend({
  toBeInTheDocument(received) {
    const isElement =
      Boolean(received) && (received.nodeType === 1 || received.nodeType === 9)
    if (!isElement) {
      return {
        pass: false,
        message: () =>
          `Expected element to be in the document, but received non-element.`,
      }
    }

    const inDoc =
      received.ownerDocument && received.ownerDocument.body.contains(received)
    if (!inDoc) {
      return {
        pass: false,
        message: () =>
          `Expected element to be in the document, but it was not found in document body.`,
      }
    }

    return { pass: true, message: () => `Element is in the document.` }
  },

  toBeDisabled(received) {
    const disabled = Boolean(received?.disabled)
    return {
      pass: disabled,
      message: () => `Expected element to be disabled.`,
    }
  },
})
