import { Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';
import { ViewComponent } from './components/view/view.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { CreateAuthorComponent } from './components/create-author/create-author.component';
import { EditAuthorComponent } from './components/edit-author/edit-author.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

export const routes: Routes = [
  { path: '', redirectTo: 'author', pathMatch: 'full' },

  { path: 'auteur', component: AuthorComponent },

  { path: 'livre', component: BookComponent },

  { path: 'vue', component: ViewComponent },

  { path: 'auteur/creer', component: CreateAuthorComponent },

  { path: 'auteur/modifier/:id', component: EditAuthorComponent },

  { path: 'livre/modifier/:id', component: EditBookComponent },

  { path: '**', component: NotFoundComponent },
];
