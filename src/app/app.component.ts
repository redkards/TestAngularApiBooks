import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';
import { ViewComponent } from './components/view/view.component';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthorComponent,
    BookComponent,
    ViewComponent,
    NavBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TestAngularApiBooks';
}
