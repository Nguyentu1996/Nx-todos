import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'web-shell-nav', 
    styleUrls: ['nav.component.css'],
    templateUrl: 'nav.component.html'
})
export class NavComponent implements OnInit {
    lessions: string[] = [
        'Introduction',
        'What you should already know',
        'JavaScript and Java',
        'Hello world',
        'Variables',
        'Declaring variables',
        'Variable scope',
        'Global variables',
        'Constants',
        'Data types',
        'if...else statement',
        'while statement',
        'Function declarations',
        'Reference',
    ]
    constructor() {}
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }
}
