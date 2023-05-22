import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EducationComponent } from './education.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('EducationComponent', () => {
  let component: EducationComponent
  let fixture: ComponentFixture<EducationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(EducationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
