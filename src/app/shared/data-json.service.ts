import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataJsonService {

  private http = inject(HttpClient);

  fetchDataFromJson(data: string) {
    return this.http.get("assets/data.json").pipe(map((json: any) => json[data]));
  }

}
