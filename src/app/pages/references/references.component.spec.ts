import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ReferencesComponent } from './references.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('ReferencesComponent', () => {
  let component: ReferencesComponent
  let fixture: ComponentFixture<ReferencesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(ReferencesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
