import { PWWrapper } from "../Utility/playwrightWrapper";
import { selector } from "../Utility/selectors";
import { WelcomePage } from "./02-welcomePage";


export class HomePage extends PWWrapper {

    
    async clickAccount() {

        console.log(await this.getTitle());
        const homepage=await this.page.locator(selector.accounts).innerText();
        console.log(`Clicked ${homepage} tab in home page`)
        await this.page.locator(selector.accounts).click();

    }
}