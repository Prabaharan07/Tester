import {test} from "@playwright/test"
import {LoginPage} from "../pages/01-loginPage"
import { WelcomePage } from "../pages/02-welcomePage"
import {HomePage} from "../pages/03-homePage"
import { CreateAccountPage } from "../pages/04-createAccountPage"
import { FillCreateAccountPage } from "../pages/05-fillCreateAccountPage"
import {SubmitAccountPage} from "../pages/06-submitAccountPage.ts"
import { ViewAccountPage } from "../pages/07-viewAccountPage.ts"

test("Account Creation using POM with Utilities", async({page})=>
{

const lp= new LoginPage(page)
await lp.loadurl()
await lp.fillCredentials()
await lp.clickLogin();
await page.waitForTimeout(5000)

const wp=new WelcomePage(page)
await wp.clickCRM();


const hp=new HomePage(page)
await hp.clickAccount();


const cap=new CreateAccountPage(page)
await cap.createAccount()


const fcap=new FillCreateAccountPage(page)
await fcap.fillCreateAccount();


const sap=new SubmitAccountPage(page);
sap.submitCreateAccount();



const vap=new ViewAccountPage(page);
await vap.viewAccount();


})
