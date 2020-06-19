import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedFoodComponent } from './components/featured-food/featured-food.component';
import { SocialFeedComponent } from './components/social-feed/social-feed.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { MenuComponent } from './components/menu/menu.component';
import { CleanCategorieNamesPipe } from './pipes/clean-categorie-names.pipe';
import { SubFormComponent } from './components/sub-form/sub-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UpdateClientInfoComponent } from './components/update-client-info/update-client-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FeaturedFoodComponent,
    SocialFeedComponent,
    ChefsComponent,
    OurProductsComponent,
    MenuComponent,
    CleanCategorieNamesPipe,
    SubFormComponent,
    LoginFormComponent,
    UpdateClientInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
