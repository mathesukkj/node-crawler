import { test, expect } from '@jest/globals'
import { sortPages } from './report'

test('sortPages', () => {
  const input = {
    'https://pudim.com.br/': 1,
    'https://pudim.com.br/pudim': 3,
    'https://pudim.com.br/pudim2': 4,
    'https://pudim.com.br/pudim3': 14,
    'https://pudim.com.br/pudim4': 9,
  }
  const output = sortPages(input)
  const expected = [
    ['https://pudim.com.br/pudim3', 14],
    ['https://pudim.com.br/pudim4', 9],
    ['https://pudim.com.br/pudim2', 4],
    ['https://pudim.com.br/pudim', 3],
    ['https://pudim.com.br/', 1],
  ]
  expect(output).toEqual(expected)
})
