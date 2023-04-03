import { Given, When } from "@cucumber/cucumber";
import { Context } from "../../cucumber.config";
import { driverInstance } from "../../src/core/driver";
import { addProjectPane } from "../../src/pages/components/add-project.page";

Given('the user sets {string} as Project Name on the Add Project popup', async function (this: Context, projectName: string) {
    this.scenarioContext['PROJECTNAME'] = projectName;
    await addProjectPane.setProjectName(projectName);
});


Given('the user select the {string} color', async function (this: Context, projectColor: string) {
    this.scenarioContext['PROJECTCOLOR'] = projectColor;
    await addProjectPane.ClickDropdownSelectColor(projectColor);
});

Given('the user select the {string} Option', async function (this: Context, FavoritesOption: string) {
    this.scenarioContext['TEXTNAMEOPTION'] = FavoritesOption;
    await addProjectPane.ClickFavorites();
})

Given('the user select the {string} view option', async function (this: Context, viewOption: string) {
    this.scenarioContext['TEXTNAMEOPTION'] = viewOption;
    await addProjectPane.ClickViewOption(viewOption);
})


When('the user clicks the Add Button on the Add Project popup', async function () {
    await addProjectPane.clickAdd();
    await driverInstance.Page.waitForTimeout(5000);
});
