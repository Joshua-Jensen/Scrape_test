// import { scrapeService } from "../services/ScrapeService.js";
import BaseController from "../utils/BaseController.js";

export class ScrapeController extends BaseController {
    constructor() {
        super('api/scrape')
        this.router
            .get('/Albertsons', this.scrapeAlbertsons)
    }

    async scrapeAlbertsons(req, res, next) {
        try {
            const response = await scrapeService.scrapeAlbertsons()

            return res.send(response)
        }
        catch (error) {
            next(error)
        }
    }
}