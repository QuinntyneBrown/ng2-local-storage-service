import { Component } from "@angular/core";

import { LocalStorageService } from "../services";

@Component({
    template: require("./home-page.component.html"),
    styles: [require("./home-page.component.scss")],
    selector: "home-page"
})
export class HomePageComponent { 
    constructor() {

        LocalStorageService.id = "[new]";
        
        this.value = LocalStorageService.Instance.get({
            name: "foo"
        });
        
        if (!this.value) {
            this.value = 1;
        } else {
            this.value++;
        }

        LocalStorageService.Instance.put({ name: "foo", value: this.value });
    }


    public value: number = 0;
}
