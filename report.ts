export function sortPages(pages: Record<string, number>) {
  const pagesArr = Object.entries(pages)
  return pagesArr.sort((a, b) => {
    return b[1] - a[1]
  })
}

export function printReport(pages: Record<string, number>) {
  console.log('===========')
  console.log('REPORT')
  console.log('===========')
  const sortedPages = sortPages(pages)

  for (const page of sortedPages) {
    const url = page[0]
    const hits = page[1]
    console.log(
      `Found \u001b[32m${hits}\u001b[37m links to page \u001b[34m${url}\u001b[37m`,
    )
  }

  console.log('===========')
  console.log('END REPORT')
  console.log('===========')
}