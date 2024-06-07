import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsFromUrlService {
  httpClient = inject(HttpClient);
  constructor() {}
  getSettings(url: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/settings/${url}`);
  }
}
