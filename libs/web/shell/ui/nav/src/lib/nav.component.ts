import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'web-shell-nav', 
    styleUrls: ['nav.component.css'],
    templateUrl: 'nav.component.html'
})
export class NavComponent implements OnInit {
    expanded!: boolean;

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
    constructor() {
        this.expanded = true;
    }
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
        // this.handleResize();
    }
    handleResize() {
        const match = window.matchMedia('(max-width: 815px)');
        match.addEventListener('change', (e) => {
        console.log(e)
        debugger
        this.expanded = e.matches;
        });
    }
}
