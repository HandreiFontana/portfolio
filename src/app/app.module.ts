import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { ToolbarComponent } from './components/header/toolbar/toolbar.component'
import { ProfileComponent } from './components/header/profile/profile.component'
import { SocialMediaComponent } from './components/header/social-media/social-media.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DividerComponent } from './components/divider/divider.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './pages/education/education.component';
import { ReferencesComponent } from './pages/references/references.component';
import { LanguageSelectComponent } from './components/header/language-select/language-select.component';
import { LoadingComponent } from './components/loading/loading.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    ProfileComponent,
    SocialMediaComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    DividerComponent,
    EducationComponent,
    ReferencesComponent,
    LanguageSelectComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
