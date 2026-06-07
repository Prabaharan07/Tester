import { PWWrapper } from "../Utility/playwrightWrapper";
import { selector } from "../Utility/selectors";
import { HomePage } from "./03-homePage";

export class CreateAccountPage extends PWWrapper {

    async createAccount() {
        console.log(await this.getTitle());
        const createaccount = await this.page.locator(selector.createAccount).innerText();
        console.log(`Clicked ${createaccount} tab in Account page`)
        await this.page.locator(selector.createAccount).click();
    }

}