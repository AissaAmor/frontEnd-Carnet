import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";

import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarnetComponent } from "./carnet/carnet.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { ProfilComponent } from "./profil/profil.component";
import { PipePipe } from "./pipe/pipe.pipe";
import { AlphabetPipe } from "./pipe/alphabet.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CarnetComponent,
    ProfilComponent,
    PipePipe,
    AlphabetPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
