import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from 'src/app/services/pokemon/poke-api.service';

@Component({
  selector: 'app-render-pokemon',
  templateUrl: './render-pokemon.component.html',
  styleUrls: ['./render-pokemon.component.scss'],
})
export class RenderPokemonComponent implements OnInit {
  constructor(private _pokemon: PokeApiService, private router: Router) {}
  @Output() selectPokemon: EventEmitter<any> = new EventEmitter<any>();

  pokemons: any[] = [];
  searchTerm: string = '';
  filteredPokemons: any[] = [];

  limit: number = 12;
  offset: number = 0;
  currentPage: number = 1;
  totalPages: number = 0;

  isLoading: boolean = false;
  isClicked: boolean = false;

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons() {
    this.isLoading = true;
    this.pokemons = [];

    setTimeout(() => {
      this._pokemon.getPokemons(this.limit, this.offset).subscribe(
        (res) => {
          res.results.forEach((pokemon: any) => {
            this._pokemon
              .getSpecificPokemonDetails(pokemon.url)
              .subscribe((details) => {
                this.pokemons.push(details);
                this.filteredPokemons = [...this.pokemons];

                //console.log(this.filteredPokemons);

                this.totalPages = Math.ceil(res.count / this.limit);
                this.isLoading = false;
              });
          });
        },
        (err) => {
          console.error('API Error: ', err);
          this.isLoading = true;
        }
      );
    }, 1200);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.offset = this.limit * (this.currentPage - 1);
      this.loadPokemons();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.offset = this.limit * (this.currentPage - 1);
      this.loadPokemons();
    }
  }

  getBorderColor(types: any[]): string {
    const type = types[0]?.type.name;
    switch (type) {
      case 'fire':
        return 'red';
      case 'water':
        return 'blue';
      case 'grass':
        return 'green';
      case 'electric':
        return 'yellow';
      case 'bug':
        return 'brown';
      case 'fairy':
        return 'pink';
      case 'psychic':
        return 'purple';
      case 'normal':
        return 'gray';
      case 'rock':
        return 'darkgray';

      default:
        return 'black';
    }
  }

  displayPokemonDetails(pokemon: any) {
    this.isClicked = true;

    // console.log('Selected Pokémon:', pokemon);
    // console.log('Pokémon ID:', pokemon);

    this.selectPokemon.emit(pokemon);

    setTimeout(() => {
      this.isClicked = false;
    }, 4000);
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase();

    this.filteredPokemons = this.pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(term);
    });
  }
}
