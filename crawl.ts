import { JSDOM } from 'jsdom'

export function normalizeURL(url: string): string {
  const urlObj = new URL(url)
  const hostPath = `${urlObj.hostname}${urlObj.pathname}`

  if (hostPath.length > 0 && hostPath.slice(-1) === '/') {
    return hostPath.slice(0, -1)
  }

  return hostPath
}

export function getURLsFromHTML(htmlBody: string, baseURL: string) {
  const dom = new JSDOM(htmlBody)
  const anchors = dom.window.document.querySelectorAll('a')
  const hrefs = Array.from(anchors).map((a: HTMLAnchorElement) => {
    try {
      if (a.href.charAt(0) === '/') {
        return new URL(`${baseURL}${a.href}`).href
      }
      return new URL(a.href).href
    } catch (err) {}
  })

  return hrefs
}

export async function crawlPage(url: string) {
  try {
    const res = await fetch(url).then((res) => res)

    if (res.status >= 400) {
      throw new Error('Status code: ' + res.status)
    }

    if (!res.headers.get('content-type')?.includes('text/html')) {
      throw new Error(
        `non-html response. got ${res.headers.get('content-type')} instead of html`,
      )
    }

    console.log(await res.text())
  } catch (err) {
    console.error('error during fetching! ' + err)
  }
}