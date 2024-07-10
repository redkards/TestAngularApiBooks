import { Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';
import { ViewComponent } from './components/view/view.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'author', pathMatch: 'full' },

  { path: 'auteur', component: AuthorComponent },

  { path: 'livre', component: BookComponent },

  { path: 'vue', component: ViewComponent },

  { path: '**', component: NotFoundComponent },
];
