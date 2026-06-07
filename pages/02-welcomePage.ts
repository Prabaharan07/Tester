
import { selectors } from "@playwright/test";
import { PWWrapper } from "../Utility/playwrightWrapper"
import { selector } from "../Utility/selectors";

export class WelcomePage extends PWWrapper {



    async clickCRM() {
        console.log(await this.getTitle());
        await this.clickButton(selector.crmsfa)
       // await this.page.locator(selector.crmsfa).click()
    }

}