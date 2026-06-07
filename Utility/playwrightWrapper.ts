import { Page } from "@playwright/test"
import dotenv from "dotenv"

let filename = process.env.envFilename // To get the data from the terminal we have use process keyword
dotenv.config({ path: `Data/${filename}` })

export abstract class PWWrapper {

    page: Page
    constructor(BrowserPage: Page) {
        this.page = BrowserPage

    }
    async getTitle(): Promise<string> {

        const title = await this.page.title()
        return title
    }

    async clearAndFill(locator: string, data: string): Promise<void> {
        const element = this.page.locator(locator);
        await element.clear();
        await element.fill(data);
        console.log(`Filled ${locator} with value: ${data}`);
    }

    async clickButton(locator: string): Promise<void> {
        await this.page.locator(locator).click();
        console.log("Clicked login button");
    }



}