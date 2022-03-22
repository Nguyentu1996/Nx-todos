import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'web-shell-nav',
  styleUrls: ['nav.component.css'],
  templateUrl: 'nav.component.html'
})
export class NavComponent implements OnInit {
  @ViewChild('backdrop', { static: true}) backdrop!: ElementRef<HTMLElement>;
  @ViewChild('sidenav', { static: true}) sidenav!: ElementRef<HTMLElement>;
  @ViewChild('sidenavContent', {static: true}) sidenavContent!: ElementRef<HTMLElement>;
  sideNavOffset = '300px';
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
    'Reference'
  ];

  ngOnInit(): void {
    this.handleResize();
  }
  
  handleResize() {
    const match = window.matchMedia('(max-width: 900px)');
    console.log(match);
    if(!match.matches) {
      this.sidenavContent.nativeElement.style.marginLeft = '0';
      this.sidenav.nativeElement.style.transform = 'none';
      this.sidenavContent.nativeElement.style.marginLeft = this.sideNavOffset;
      this.backdrop.nativeElement.classList.remove('backdrop-shown');

    }
    match.addEventListener('change', () => {
      if (match.matches) {
        this.sidenavContent.nativeElement.style.marginLeft = '0';
        this.sidenav.nativeElement.style.transform = '';
        this.backdrop.nativeElement.classList.remove('backdrop-shown');
      } else {
        this.sidenavContent.nativeElement.style.marginLeft = '300px';
        this.sidenav.nativeElement.style.transform = 'none';
      }
    });
  }
  expanded() {
    const backdropClassList = this.backdrop.nativeElement.classList;
    if (this.sidenav.nativeElement.style.transform == 'none') {
      this.sidenav.nativeElement.style.transform = '';
      this.sidenavContent.nativeElement.style.marginLeft = '0';
      backdropClassList.remove('backdrop-shown');
    } else {
      this.sidenav.nativeElement.style.transform = 'none';

      if (this.backdrop.nativeElement.offsetWidth < 1000) {
        backdropClassList.add('backdrop-shown');
      } else {
        this.sidenavContent.nativeElement.style.marginLeft = this.sideNavOffset;

      }
    }
  }
}
