import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../api-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ComposantQuestion } from '../entities/composantquestion';
import { Composant } from '../entities/composant';
import { ReponseInterface } from '../entities/reponse';
import {Reponse} from '../Reponse'
import { Newsondage } from '../entities/newsondage';

@Component({
  selector: 'app-api-user',
  templateUrl: './api-user.component.html',
  styleUrls: ['./api-user.component.css']
})
export class ApiUserComponent implements OnInit {
  selected;
  selectedRep;
  SelectedQ: Composant;
  idf: any;
  composants: Composant[];
  typeQuestion: Number;
  question: ComposantQuestion;
  reponses: ReponseInterface[];
  sondages: any;
  //Composant : Array<Question>;
  constructor(private service: ApiUserService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getAllUser().subscribe(u => {
      this.sondages = u
    });
  }
  sondageChange(id) {
    console.log(id, 'id');
    this.idf = id;
    this.selected = id;
    this.service.getAllQ(id).subscribe(q => {
      this.composants = q.Composant;

      //this.SelectedQ = this.questions
      console.log(this.composants);
    });
  }
  questionChange(question: Composant) {
    this.SelectedQ = question;
    this.question = question.Question;
    this.reponses = question.Question.Reponse
    this.typeQuestion = question.idTypeReponse;
    console.log(this.SelectedQ);
    console.log(this.reponses);
    console.log(this.typeQuestion);
    
    

  }

  onSubmit(event): void {
    let newSondage:Newsondage = {
      Date: new Date(),
      idFormulaire:this.selected,
      List: [this.selectedRep],
      Sonde: {

      }

    }
    console.log(newSondage);
    this.service.addSondage(newSondage).subscribe(value => {
      console.log("value after post",value);
      
    })
    console.log(this.selectedRep);



    this.router.navigate(['/Statistics']);

  }

}