import * as cheerio from "cheerio"
import { Albertsons } from "./AxiosService.js";


const response = await Albertsons.get("", {
    params: {
        "q": "milk"
    }
})
const webpage = response.data
export const $ = cheerio.load(webpage)
// const $selected = $('[xml\\:id="pg136010013price"');


