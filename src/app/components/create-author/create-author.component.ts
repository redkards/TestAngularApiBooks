import { AuthorServiceService } from './../../service/author-service.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-author',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-author.component.html',
  styleUrl: './create-author.component.css',
})
export class CreateAuthorComponent {
  createAuteur: FormGroup = this.formB.group({
    // id: ['', [Validators.required, Validators.minLength(1)]],
    FirstName: ['', [Validators.required, Validators.minLength(3)]],
    LastName: ['', [Validators.required, Validators.minLength(3)]],
  });

  submitted: boolean = false;

  constructor(
    private formB: FormBuilder,
    private authorService: AuthorServiceService,
    private router: Router // added Router to navigate to home page after form submission
  ) {}

  addOneAuthor(): void {
    this.authorService.addAuthor(this.createAuteur.value).subscribe();
    this.router.navigate(['/auteur']);
  }

  // onSubmit(): boolean {
  //   console.log(this.createAuteur.value);
  //   // send the form data to your backend here
  //   this.submitted = true; // set submitted to true to display success message
  //   this.createAuteur.reset(); // reset the form after submission
  //   if (this.createAuteur.invalid) {
  //     return false;
  //   } else {
  //     this.addOneAuthor(this.createAuteur.value);
  //     return true;
  //   }
  // }

  get form() {
    return this.createAuteur.controls;
  } // getter to access form controls
}
