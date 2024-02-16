import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {
  forums: any[] = [];
  forumForm!: FormGroup;
  editForm!: FormGroup; // Formulaire pour la modification
  selectedForumId!: number;
  file: any;
  blocChoice = 0;
  
  changeBloc(choice: any) {
    this.blocChoice = choice;
  }


  constructor(private forumService: ForumService, private fb: FormBuilder) {
    this.forumForm = this.fb.group({
      titre: ['', Validators.required],
      texte: ['', Validators.required],
      image: [''],
    });

    this.editForm = this.fb.group({
      titre: ['', Validators.required],
      texte: ['', Validators.required],
      image: [''],
    });
  }

  ngOnInit(): void {
    this.getForums();
  }

  submitForm(){
    const formData = new FormData();
        formData.append('titre', this.forumForm.value.titre);
        formData.append('texte', this.forumForm.value.texte);
        formData.append('image', this.file);
  
        this.forumService.addForum(formData).subscribe(
          (response) => {
            console.log(response);
            // Gérer la réponse de l'ajout
            // ...
            this.forums.unshift(this.forumForm.value)
            this.blocChoice = 0
            this.resetForm();
            this.getForums();
          },
          (error) => {
            console.error('Erreur lors de l\'ajout du forum :', error);
          }
        ); 
  }


  submitFormEdit(){
    // Mode modificationt
      const formData = new FormData();
      formData.append('titre', this.editForm.value.titre);
      formData.append('texte', this.editForm.value.texte);
      formData.append('image', this.file);


      
      console.log(formData, "apres soumission");
      

      this.forumService.updateForum(this.selectedForumId, formData).subscribe(
        (response) => {
          console.log(response);
          // Gérer la réponse de la mise à jour
          // ...

          this.resetForm();
          this.getForums();
          this.blocChoice = 0
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du forum :', error);
        }
      );
  }



  getForums(): void {
    this.forumService.getForums().subscribe(
      (response) => {
        if ('forums' in response) {
          this.forums = response.forums.reverse();
        }
        console.log(response);
      },
      (error) => {
        console.error('Erreur lors de la récupération des forums :', error);
      }
    );
  }

  onchange(event: any) {
    console.log(event.target.files);

    this.file = event.target.files[0];
  }

  editForum(forum: any) {
    this.selectedForumId = forum.id;
    this.editForm.patchValue({
      titre: forum.titre,
      image: forum.image,
      texte: forum.texte,

    });
    console.log("forumM", this.editForm);
  }

  resetForm() {
    this.forumForm.reset();
    this.editForm.reset();
    this.selectedForumId;
  }
}