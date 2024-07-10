import { Component } from '@angular/core';
import { Author } from '../../models/author.model';
import { AuthorServiceService } from '../../service/author-service.service';
import { BookServiceService } from '../../service/book-service.service';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {
  auteur: Author[] = [];

  constructor(
    private authorService: AuthorServiceService, // Assuming AuthorService is a service that fetches authors from an API
    private bookService: BookServiceService // Assuming AuthorService is a service that fetches authors from an API
  ) {}

  ngOnInit(): void {
    this.authorService
      .getAllAuthors()
      .subscribe((reponseFilm) => (this.auteur = reponseFilm));
  }
}
