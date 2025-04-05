import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderPokemonComponent } from './render-pokemon.component';

describe('RenderPokemonComponent', () => {
  let component: RenderPokemonComponent;
  let fixture: ComponentFixture<RenderPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
