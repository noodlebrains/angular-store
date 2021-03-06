import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})


export class MarketplaceComponent implements OnInit {

  albums: FirebaseListObservable<any[]>; // albums property is defined here, waiting to receive data from AlbumService.
  currentRoute: string = this.router.url; // router knows which route this is being rendered in

  constructor(private router: Router, private albumService: AlbumService) { } // needs an instance of both router and service

  ngOnInit() {
    this.albums = this.albumService.getAlbums(); // as soon as MarketplaceComponent loads it gets all the albums automatically from
  }

  goToDetailPage(clickedAlbum){ // gets clickedAlbum from click event on view (cannot be type checked, tyoe is special from Firebase)
    this.router.navigate(['albums', clickedAlbum.$key]); //
  }
}
