import { getURLsFromHTML, normalizeURL } from './crawl'
import { test, expect } from '@jest/globals'

test('normalizeURLs', () => {
  const input = 'https://Blog.boot.dev/path/'
  const output = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(output).toEqual(expected)
})

test('getURLsFromHTML absolute', () => {
  const inputHTMLBody = `<html><body><a href='https://youtube.com/'>Link</a></body></html>`
  const inputBaseURL = 'https://youtube.com'
  const output = getURLsFromHTML(inputHTMLBody, inputBaseURL)
  const expected = ['https://youtube.com/']
  expect(output).toEqual(expected)
})

test('getURLsFromHTML relative', () => {
  const inputHTMLBody = `<html><body><a href='/video/'>Link</a></body></html>`
  const inputBaseURL = 'https://youtube.com'
  const output = getURLsFromHTML(inputHTMLBody, inputBaseURL)
  const expected = ['https://youtube.com/video/']
  expect(output).toEqual(expected)
})

test('getURLsFromHTML both', () => {
  const inputHTMLBody = `<html><body>
    <a href='/video/'>Link</a>
    <a href='https://youtube.com/video2/'>Link2</a>
  </body></html>`
  const inputBaseURL = 'https://youtube.com'
  const output = getURLsFromHTML(inputHTMLBody, inputBaseURL)
  const expected = ['https://youtube.com/video/', 'https://youtube.com/video2/']
  expect(output).toEqual(expected)
})

test('getURLsFromHTML valid', () => {
  const inputHTMLBody = `<html><body>
    <a href='123invalid'>Link</a>
  </body></html>`
  const inputBaseURL = 'https://youtube.com'
  const output = getURLsFromHTML(inputHTMLBody, inputBaseURL)
  expect(output).toEqual([])
})
