import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/_services/collections.service';
import {TokenStorageService} from '../../_services/token-storage.service';


@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.css']
})
export class CollectionsListComponent implements OnInit {

  collections: any;
  currentCollections = null;
  currentIndex = -1;
  title = '';

  constructor(private collectionsService: CollectionsService, private tokenStorageService: TokenStorageService ) { }

  ngOnInit(): void {
    this.retrieveCollections();
  }

  retrieveCollections(): void {
    this.collectionsService.findByUser(this.tokenStorageService.getUser().id)
      .subscribe(
        data => {
          this.collections = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCollections();
    this.currentCollections = null;
    this.currentIndex = -1;
  }

  setActiveCollections(collections, index): void {
    this.currentCollections = collections;
    this.currentIndex = index;
  }

  removeAllCollections(): void {
    this.collectionsService.deleteAll(this.tokenStorageService.getUser().id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCollections();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.collectionsService.findByTitle(this.title)
      .subscribe(
        data => {
          this.collections = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
