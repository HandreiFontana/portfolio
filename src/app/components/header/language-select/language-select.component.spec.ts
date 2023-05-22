import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LanguageSelectComponent } from './language-select.component'
import { LanguageService } from 'src/app/services/language.service'

describe('LanguageSelectComponent', () => {
  let component: LanguageSelectComponent
  let service: LanguageService
  let fixture: ComponentFixture<LanguageSelectComponent>
  let changeLanguageSpyOn: jasmine.Spy
  let closeModalSpyOn: jasmine.Spy
  let language: string

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageSelectComponent ]
    })
    .compileComponents()

    fixture = TestBed.createComponent(LanguageSelectComponent)
    service = TestBed.inject(LanguageService)
    component = fixture.componentInstance
    fixture.detectChanges()

    language = 'pt-br'

    changeLanguageSpyOn = spyOn(service, "changeLanguage")
  })

  it('should toggle modal status', () => {
    component.toggleModal()
    expect(component.isActiveLanguageModal).toBeTrue()
    component.toggleModal()
    expect(component.isActiveLanguageModal).toBeFalse()
  })

  it('should select language', () => {
    component.selectLanguage(language)

    expect(changeLanguageSpyOn).toHaveBeenCalledTimes(1)
  })

  it('should close language modal', () => {
    component.isActiveLanguageModal = true
    component.selectLanguage(language)
    
    expect(component.isActiveLanguageModal).toBeFalse()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
