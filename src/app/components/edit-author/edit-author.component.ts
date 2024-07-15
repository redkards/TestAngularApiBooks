import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthorServiceService } from '../../service/author-service.service';
import { Author } from '../../models/author.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-author.component.html',
  styleUrl: './edit-author.component.css',
})
export class EditAuthorComponent {
  // updateAuteur: FormGroup = this.formB.group({
  //   // id: ['', [Validators.required, Validators.minLength(1)]],
  //   FirstName: ['', [Validators.required, Validators.minLength(3)]],
  //   LastName: ['', [Validators.required, Validators.minLength(3)]],
  // });

  // submitted: boolean = false;
  // authorId?: number;

  // constructor(
  //   private formB: FormBuilder,
  //   private authorService: AuthorServiceService,
  //   private route: ActivatedRoute,
  //   private router: Router,
  // ) {}

  // ngOnInit(): void {
  //   this.authorId = Number(this.route.snapshot.paramMap.get('id'));
  //   if (this.authorId) {
  //     this.authorService
  //       .getAuthorById(this.authorId)
  //       .subscribe((data: Author) => {
  //         console.log(data);

  //         this.updateAuteur.patchValue(data);
  //       });
  //   }
  // }

  // updateOneAuthor(): void {
  //   this.authorService.updateAuthor(this.updateAuteur.value).subscribe();
  // }

  // onSubmit(): boolean {
  //   console.log(this.updateAuteur.value);
  //   // send the form data to your backend here
  //   this.updateAuteur.reset(); // reset the form after submission
  //   this.submitted = true; // set submitted to true to display success message
  //   if (this.updateAuteur.invalid) {
  //     return false;
  //   } else {
  //     this.updateOneAuthor();
  //     return true;
  //   }
  // }

  // get form() {
  //   return this.updateAuteur.controls;
  // } // getter to access form controls

  auteur: FormGroup;
  submitted: boolean = false;
  authorId?: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorServiceService
  ) {
    this.auteur = this.formBuilder.group({
      FirstName: ['', [Validators.required, Validators.minLength(3)]],
      LastName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.authorId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.authorId) {
      this.authorService
        .getAuthorById(this.authorId)
        .subscribe((data: Author) => {
          console.log(data);

          this.auteur.patchValue(data);
        });
    }
  }

  updateOneAuthor(): void {
    console.log(this.auteur.value);
    this.authorId = Number(this.route.snapshot.paramMap.get('id'));

    this.authorService
      .updateAuthor(this.auteur.value, this.authorId)
      .subscribe();
  }

  // onSubmit(): void {
  //   console.log(this.auteur);

  //   this.submitted = true;
  //   if (this.auteur.invalid) {
  //     return;
  //   }

  //   if (this.authorId) {
  //     const updatedAuthor = { ...this.auteur.value, id: this.authorId };
  //     this.authorService.updateAuthor(updatedAuthor).subscribe({
  //       next: () => {
  //         alert('auteur mis à jour avec succès !');
  //         this.router.navigate(['/authors']);
  //       },
  //       error: (error) => {
  //         console.error("Erreur lors de la mise à jour de l'auteur", error);
  //       },
  //     });
  //   }
  // }

  get form() {
    return this.auteur.controls;
  }
}
