import * as cheerio from "cheerio"
import { Albertsons } from "./AxiosService.js"



// class ScrapeService {
//     async scrapeAlbertsons() {
//         // const response = await Albertsons.get("", {
//         //     params: {
//         //         "q": "milk"
//         //     }
//         // })
//         // const webpage = response.data
//         // const $ = cheerio.load(webpage)
//         // const $selected = $('[xml\\:id="pg136010013price"');

//         // return $selected
//         //     const browser = await puppeteer.launch()
//         //     const page = await browser.newPage()
//         //     let resData = null
//         //     await page.setRequestInterception(true)
//         //     resData = await page.on('response', async (response) => {
//         //         const request = response.request();
//         //         if (request.url().includes('https://www.albertsons.com/abs/pub/xapi/pgmsearch/v1/search/products.json()')) {
//         //             const text = await response.text();
//         //             return text
//         //         }
//         //     })

//         //     await page.goto('https://www.albertsons.com/shop/search-results.html?q=milk')
//         //     await browser.close()

//         //     return resData

//         const interceptor = new RemoteHttpInterceptor()



//     }

// }

// child.js
// import { RemoteHttpInterceptor } from '@mswjs/interceptors/RemoteHttpInterceptor'
// import { ClientRequestInterceptor } from '@mswjs/interceptors/ClientRequest'

// const interceptor = new RemoteHttpInterceptor({
//   // Alternatively, you can use presets.
//   interceptors: [new ClientRequestInterceptor()],
// })

// interceptor.apply()

// process.on('disconnect', () => {
//   interceptor.dispose()
// })

// import { ClientRequestInterceptor } from '@mswjs/interceptors/ClientRequest'

// const interceptor = new ClientRequestInterceptor()

// // Enable the interception of requests.
// interceptor.apply()

// // Listen to any "http.ClientRequest" being dispatched,
// // and log its method and full URL.
// interceptor.on('request', (request, requestId) => {
//     console.log(request.method, request.url)
// })

// // Listen to any responses sent to "http.ClientRequest".
// // Note that this listener is read-only and cannot affect responses.
// interceptor.on('response', (response, request) => {
//     console.log('response to %s %s was:', request.method, request.url, response)
// })


// export const scrapeService = new ScrapeService()