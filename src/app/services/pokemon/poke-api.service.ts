import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  pokeAPI = 'https://pokeapi.co/api/v2/';

  constructor(private HTTP: HttpClient) {}

  getPokemons(limit: number, offset: number): Observable<any> {
    return this.HTTP.get(
      `${this.pokeAPI}pokemon?limit=${limit}&offset=${offset}"`
    );
  }

  getSpecificPokemonDetails(url: string): Observable<any> {
    return this.HTTP.get(url);
  }
}
