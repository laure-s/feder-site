import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideNavBool: boolean = true;
  title = 'My First Angular App!';

  toggleSideNav() {
    if (sideNavBool) {
      document.querySelector('.nav').classList.toggle('open');
    } else { document.querySelector('.nav').classList.remove('open'); }
      sideNavBool = !sideNavBool;
  }

}
