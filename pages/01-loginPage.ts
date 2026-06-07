import { PWWrapper } from "../Utility/playwrightWrapper";
import { selector } from "../Utility/selectors";

export class LoginPage extends PWWrapper {

    async loadurl() {

        await this.page.goto(process.env.lf_url as string) // page fixture reference
        console.log(`Logged into url  ${process.env.lf_url as string}`);
        console.log(await this.getTitle());
    }


    async fillCredentials() {

        await this.clearAndFill(selector.username, process.env.lf_username as string)
        await this.clearAndFill(selector.password, process.env.lf_password as string)

    }

    async clickLogin() {
        await this.page.waitForTimeout(3000);
        this.clickButton(selector.login)
        console.log("Clicked login button");

    }

    // page fixture is the first value that has to asigned before all other method gets invoked




}