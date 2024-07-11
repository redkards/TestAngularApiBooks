import { Component, Input } from '@angular/core';
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
  @Input()
  // auteurs: any;
  // auteur: Author[] = [];
  auteurDetail: any;

  constructor(
    private authorService: AuthorServiceService, // Assuming AuthorService is a service that fetches authors from an API
    private bookService: BookServiceService // Assuming AuthorService is a service that fetches authors from an API
  ) {}

  ngOnInit(): void {
    this.authorService
      .getAllAuthors()
      .subscribe((responseAuthor) => (this.auteurDetail = responseAuthor));
    console.log(this.auteurDetail);
  }

  deleteOneAuthor(item: any): void {
    this.authorService.deleteAuthor(item.id).subscribe();
  }
  updateOneAuthor(item: any): void {
    this.authorService.updateAuthor(item.id, item).subscribe();
  }
}
