import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent }   from './app.component';
import { mainComponent } from './manComponent';
import { loginComponent } from './loginComponent';

const routes: Routes = [
	{path: '', component: mainComponent},
	{path: 'login', component: loginComponent },
];
 
@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, mainComponent,loginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
	 { provide: LocationStrategy, useClass: PathLocationStrategy }
 ]
})
export class AppModule { }