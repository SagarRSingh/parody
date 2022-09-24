import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
    selector:'homepage',
    templateUrl:'./create-homepage-component.html',
    styleUrls:['create-homepage-component.css']
})

export class HomepageComponent{
    saveUser(form:NgForm){
console.log(form.value);

}
}