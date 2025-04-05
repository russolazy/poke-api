import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPokemonDetailsComponent } from './display-pokemon-details.component';

describe('DisplayPokemonDetailsComponent', () => {
  let component: DisplayPokemonDetailsComponent;
  let fixture: ComponentFixture<DisplayPokemonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPokemonDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
