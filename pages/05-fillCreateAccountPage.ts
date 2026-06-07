import { faker } from '@faker-js/faker';
import { CreateAccountPage } from "./04-createAccountPage";
import { PWWrapper } from '../Utility/playwrightWrapper';
import { selector } from '../Utility/selectors';

export class FillCreateAccountPage extends PWWrapper {

    async fillCreateAccount() {
        console.log(await this.getTitle());
        await this.clearAndFill(selector.accountname,faker.company.name());
        await this.clearAndFill(selector.localname,faker.person.firstName());
        await this.clearAndFill(selector.sitename,faker.person.jobArea());
        console.log(`Filled Details in Account Page`)

    }
}