import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { HttpModule} from '@angular/http';

import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
