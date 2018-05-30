import { environment } from './../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SecurityAnswerService {

  private hostServer = environment.hostServer
  private host = this.hostServer + '/api/SecurityAnswers'

  constructor (private http: HttpClient) { }

  save (params) {
    console.log(this.hostServer)
    console.log(this.host)
    return this.http.post(this.host + '/', params).pipe(
      map((response: any) => response.data),
      catchError((err) => err)
    )
  }
}
