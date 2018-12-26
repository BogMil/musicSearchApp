import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'search', component: SearchComponent}
    ])
  ],
  providers: [
    {
      provide: SpotifyService,
      deps: [Http],
      useFactory(http: Http) {
        return new SpotifyService(http);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
