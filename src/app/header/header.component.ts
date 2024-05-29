import { Component } from "@angular/core"; //use this to make this header a actual component

@Component({
    selector: 'my-header', //using this selector name we can call this header component
    standalone: true,//other components type are module based , module based or standalone comp
    templateUrl: './header.component.html',
    // styles:['h1 { font-color: red; }'],
    styleUrl: './header.component.css'
})


export class HeaderComponent{} //need to export this class to use this component