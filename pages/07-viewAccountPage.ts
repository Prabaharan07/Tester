import { PWWrapper } from "../Utility/playwrightWrapper";
import { selector } from "../Utility/selectors";
import { SubmitAccountPage } from "./06-submitAccountPage";

export class ViewAccountPage extends PWWrapper {


    async viewAccount(){

    console.log(await this.getTitle());
    const viewAccountname=await this.page.locator(selector.viewaccountname).innerText();
    console.log(`Account name is ${viewAccountname}`)

 }
}