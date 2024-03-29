import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component'

import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
import { ListingsComponent } from './dashboard/listings/listings.component';
import { AddListingsComponent } from './dashboard/add-listings/add-listings.component';
import { WishlistsComponent } from './dashboard/wishlists/wishlists.component';
import { ExploreComponent } from './explore/explore.component';
import { BecomeAGuideComponent } from './become-a-guide/become-a-guide.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { TripsComponent } from './dashboard/trips/trips.component';
import { ItinerariesComponent } from './dashboard/itineraries/itineraries.component';
import { HostsComponent } from './hosts/hosts.component';

@NgModule({
  declarations: [ 
    AppComponent, 
    StoriesComponent, 
    HomeComponent, 
    SearchResultsComponent, NotFoundComponent, DashboardComponent, EditProfileComponent, DashboardMainComponent, ListingsComponent, AddListingsComponent, WishlistsComponent, ExploreComponent, BecomeAGuideComponent, MessagesComponent, TripsComponent, ItinerariesComponent, HostsComponent, 
  ],
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
