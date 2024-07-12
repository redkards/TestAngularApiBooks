import { Component, Input } from '@angular/core';
import { Author } from '../../models/author.model';
import { AuthorServiceService } from '../../service/author-service.service';
import { BookServiceService } from '../../service/book-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {
  @Input()
  // auteurs: any;
  // auteur: Author[] = [];
  auteurDetail: Author[] = [];

  constructor(
    private authorService: AuthorServiceService, // Assuming AuthorService is a service that fetches authors from an API
    private bookService: BookServiceService // Assuming AuthorService is a service that fetches authors from an API
  ) {}

  ngOnInit(): void {
    this.authorService.getAllAuthors().subscribe((responseAuthor) => {
      this.auteurDetail = responseAuthor;

      console.log(responseAuthor);
    });
  }

  deleteOneAuthor(id: number): void {
    this.authorService.deleteAuthor(id).subscribe();
    const autorFilter = this.auteurDetail.filter((item) => item.id !== id);

    this.auteurDetail = autorFilter;

    console.log(autorFilter);
  }
  updateOneAuthor(item: any): void {
    this.authorService.updateAuthor(item).subscribe();
  }
}
