import { driverInstance } from "../../core/driver";
import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

class AddProject extends BasePage {
    private nameTextField: string = '#edit_project_modal_field_name';
    private addButton: string = '//span[text()="Add"]//parent::button';
    private cancelButton: string = '//span[text()="Cancel"]//parent::button';    
    
    // Extra Points add select the following behavior
    private colorDropdown: string = "//button[@class='color_dropdown_toggle form_field_control']";
    private favoritesToggle: string = ".reactist_switch";
    private optionListView: string = "//div[normalize-space()='List']";
    //private optionListView: string = "//div[text()='List']";
    private optionBoardView: string = "//div[normalize-space()='Board']";
    //private optionBoardView: string = "//div[text()='Board']";

    constructor(){
        super();
    }

    async setProjectName(projectName: string) {
        await ElementActions.setText(this.nameTextField, projectName);
    }

    async clickAdd() {
        
        await ElementActions.click(this.addButton);
        await driverInstance.Page.waitForTimeout(400);
    }

    async clickRemove() {
        await ElementActions.click(this.addButton);
    }

    async createNewProject(projectName: string, color: string, isFavorite: boolean, view: string) {
        // Add Code
    }

    async ClickDropdownSelectColor(projectColor: string) {     
        projectColor = `//span[normalize-space()='${projectColor}']`;
        console.log(projectColor);      
        await ElementActions.setColor(this.colorDropdown, projectColor);   
    } 
    
    async ClickTextOption(colorNameOption: string){       
        colorNameOption = `//span[text()="${colorNameOption}"] `;
        //colorNameOption = `//div[normalize-space()="${colorNameOption}"]`;  
        await ElementActions.ClickText(colorNameOption);
    }
    /*async ClickFavorites(FavoritesOption: string){       
        FavoritesOption = `//div[normalize-space()="${FavoritesOption}"] `;
        await ElementActions.ClickText(FavoritesOption);
    }*/
    async ClickFavorites(){       
        //FavoritesOption = `//div[normalize-space()="${FavoritesOption}"] `;
        await ElementActions.ClickText(this.favoritesToggle);
    }

    async ClickViewOption(viewOption: string){       
        viewOption = `//div[text()="${viewOption}"] `;
        await ElementActions.ClickText(viewOption);
    }
}

export const addProjectPane = new AddProject();