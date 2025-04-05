import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { PokeApiService } from 'src/app/services/pokemon/poke-api.service';

@Component({
  selector: 'app-display-pokemon-details',
  templateUrl: './display-pokemon-details.component.html',
  styleUrls: ['./display-pokemon-details.component.scss'],
})
export class DisplayPokemonDetailsComponent implements OnChanges {
  @Input() pokemon: any;
  constructor(private _pokemon: PokeApiService) {}

  pokemonDetails: any = {};

  ngOnChanges(): void {
    console.log('Display Component, pokemon:', this.pokemon);

    this._pokemon.getSpecificPokemonDetailsId(this.pokemon).subscribe(
      (res) => {
        console.log('API Response: ', res);

        this.pokemonDetails = res;
      },
      (err) => {
        console.error('API Error: ', err);
      }
    );
  }
}
