import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthorServiceService } from '../../service/author-service.service';

@Component({
  selector: 'app-edit-author',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-author.component.html',
  styleUrl: './edit-author.component.css',
})
export class EditAuthorComponent {
  updateAuteur: FormGroup = this.formB.group({
    // id: ['', [Validators.required, Validators.minLength(1)]],
    FirstName: ['', [Validators.required, Validators.minLength(3)]],
    LastName: ['', [Validators.required, Validators.minLength(3)]],
  });

  submitted: boolean = false;

  constructor(
    private formB: FormBuilder,
    private authorService: AuthorServiceService
  ) {}

  updateOneAuthor(author: any): void {
    this.authorService.updateAuthor(author).subscribe();
  }

  onSubmit(): boolean {
    console.log(this.updateAuteur.value);
    // send the form data to your backend here
    this.updateAuteur.reset(); // reset the form after submission
    this.submitted = true; // set submitted to true to display success message
    if (this.updateAuteur.invalid) {
      return false;
    } else {
      this.updateOneAuthor(this.updateAuteur.value);
      return true;
    }
  }

  get form() {
    return this.updateAuteur.controls;
  } // getter to access form controls
}
