import { crawlPage } from './crawl'
import { sortPages } from './report'

async function main() {
  if (process.argv.length < 3) {
    console.error('no website provided')
    process.exit(1)
  }

  if (process.argv.length > 3) {
    console.error('too many cli args')
    process.exit(1)
  }

  const baseUrl = process.argv[2]

  console.log(`starting crawl of ${baseUrl}`)
  const pages = await crawlPage(baseUrl, baseUrl, {})
  const sortedPages = sortPages(pages)
  console.log(sortedPages)
}

main()
