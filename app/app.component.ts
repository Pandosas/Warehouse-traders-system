import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <div>
	<nav>
	<a>Navigation:</a>
	<ul>
	<li><a [routerLink]="['']">Home</a></li>
	<li><a [routerLink]="['login']">Login</a></li>
	</ul>
	</nav>

	<router-outlet></router-outlet>
	</div>
  `
})
export class AppComponent { }