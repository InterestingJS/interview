import '@testing-library/jest-dom'

// https://github.com/remix-run/react-router/issues/12363
if (!globalThis.TextEncoder || !globalThis.TextDecoder) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { TextDecoder, TextEncoder } = require('node:util')
  globalThis.TextEncoder = TextEncoder
  globalThis.TextDecoder = TextDecoder
}
