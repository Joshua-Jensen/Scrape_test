import * as cheerio from "cheerio"
import { Albertsons } from "./AxiosService.js"
import { BatchInterceptor } from '@mswjs/interceptors'
import { XMLHttpRequestInterceptor } from '@mswjs/interceptors/XMLHttpRequest'

class ScrapeService {
    async scrapeAlbertsons() {
        // const response = await Albertsons.get("", {
        //     params: {
        //         "q": "milk"
        //     }
        // })
        // const webpage = response.data
        // const $ = cheerio.load(webpage)
        // const $selected = $('[xml\\:id="pg136010013price"');

        // return $selected
        //     const browser = await puppeteer.launch()
        //     const page = await browser.newPage()
        //     let resData = null
        //     await page.setRequestInterception(true)
        //     resData = await page.on('response', async (response) => {
        //         const request = response.request();
        //         if (request.url().includes('https://www.albertsons.com/abs/pub/xapi/pgmsearch/v1/search/products.json()')) {
        //             const text = await response.text();
        //             return text
        //         }
        //     })

        //     await page.goto('https://www.albertsons.com/shop/search-results.html?q=milk')
        //     await browser.close()

        //     return resData

        const interceptor = new 



    }

}


export const scrapeService = new ScrapeService()