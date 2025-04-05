import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayPokemonDetailsComponent } from './components/display-pokemon-details/display-pokemon-details.component';

const routes: Routes = [
  {
    path: 'pokemon-details/:id',
    component: DisplayPokemonDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
