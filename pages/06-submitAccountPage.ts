import { PWWrapper } from "../Utility/playwrightWrapper";
import { selector } from "../Utility/selectors";
import {FillCreateAccountPage} from "./05-fillCreateAccountPage"

export class SubmitAccountPage extends PWWrapper
{
async submitCreateAccount()
{
console.log(await this.getTitle());
await this.page.locator(selector.submitaccount).click();
console.log(`Clicked submit in Account Page`)

}
}