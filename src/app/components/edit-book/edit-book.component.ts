import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../../service/book-service.service';
import Book from '../../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css',
})
export class EditBookComponent {
  book: FormGroup;
  submitted: boolean = false;
  bookId?: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookServiceService
  ) {
    this.book = this.formBuilder.group({
      title: ['', Validators.required],
      coverText: ['', Validators.required],
      idAuthor: ['', Validators.required],
      comment: [''],
    });
  }

  ngOnInit(): void {
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.bookId) {
      this.bookService.getBookById(this.bookId).subscribe((data: Book) => {
        console.log(data);

        this.book.patchValue(data);
      });
    }
  }

  updateOneBook(): void {
    this.bookService.updateBook(this.book.value).subscribe();
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.book.invalid) {
      return;
    }

    if (this.bookId) {
      const updatedBook = { ...this.book.value, id: this.bookId };
      this.bookService.updateBook(updatedBook).subscribe({
        next: () => {
          alert('Livre mis à jour avec succès !');
          this.router.navigate(['/books']);
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour du livre', error);
        },
      });
    }
  }

  get form() {
    return this.book.controls;
  }
}
