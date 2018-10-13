import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Sondage } from './sondage';
import { SondageInterface } from './entities/sondage';
import { Reponse } from './Reponse';
import { Newsondage } from './entities/newsondage';


@Injectable({
  providedIn: 'root'
})

export class ApiUserService {
  url='http://satisfactionsurveyapi.azurewebsites.net/api/FormulaireApi';
 //id=Sondage.id;
  constructor(private http: HttpClient) { 
   
  }
  getAllUser(): Observable<Object>{ 

    
      return this.http.get<Object>('http://satisfactionsurveyapi.azurewebsites.net/api/FormulaireApi/');

  }
  getAllQ(id : number): Observable<SondageInterface>
  { 
    
  const httpOptions={

    headers:new HttpHeaders({'Content-Type': 'application/json'})
     };

     console.log(id);
    return this.http.get<SondageInterface>(`http://satisfactionsurveyapi.azurewebsites.net/api/FormulaireApi/${id}`);
   // .pipe( tap(_ => this.log(`fetched question id=${id}`)), catchError(this.handleError<Object>(`getQuestion id=${id}`)));
   
    }

   

  addRep(data: Reponse) : Observable<any> {
    return this.http.post('http://satisfactionsurveyapi.azurewebsites.net/api/FormulaireApi/', JSON.stringify(data));


  }
  addSondage(data:Newsondage) :Observable<any> {
    const httpOptions={

      headers:new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post('http://satisfactionsurveyapi.azurewebsites.net/api/SondageApi',JSON.stringify(data),httpOptions)
  }
}



