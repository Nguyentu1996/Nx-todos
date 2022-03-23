import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
export interface DocProgram {
  title: string;
  href: string;
}
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
  lessions: DocProgram[] = [
    {
      title: 'Introduction',
      href: "#Introduction",
    },
    {
      title: 'What you should already know',
      href: "#What_you_should_already_know",
    },
    {
      title: 'JavaScript and Java',
      href: "#JavaScript_and_Java",
    },
    {
      title: 'Hello world',
      href: "#Hello_world",
    },
    {
      title: 'Variables',
      href: '#Variables'
    },
    {
      title: 'Declaring variables',
      href: '#Declaring_variables',
    },
    {
      title: 'Variable scope',
      href: '#Variable_scope',
    },
    {
      title: 'Global variables',
      href: '#Global_variables'
    },
    {
      title: 'Constants',
      href: '#Constants'
    },
    {
      title: 'Data types',
      href: '#Data_types,'
    },
    {
      title: 'if...else statement',
      href: '#If_else_statement'
    },
    {
      title:  'while statement',
      href: '#While_statement'
    },
    {
      title: 'Function declarations',
      href: '#Function_declarations'
    },
    {
      title: 'Reference',
      href: '#Reference'
    }
  ];

  ngOnInit(): void {
    this.handleResize();
  }
  
  handleResize() {
    const match = window.matchMedia('(max-width: 900px)');
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
      } else {
        this.sidenavContent.nativeElement.style.marginLeft = '300px';
        this.sidenav.nativeElement.style.transform = 'none';
        this.backdrop.nativeElement.classList.remove('backdrop-shown');
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
