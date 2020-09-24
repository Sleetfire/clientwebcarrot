import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/_services/collections.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collections-details',
  templateUrl: './collections-details.component.html',
  styleUrls: ['./collections-details.component.css']
})
export class CollectionsDetailsComponent implements OnInit {
  currentCollections = null;
  message = '';

  constructor(
    private collectionsService: CollectionsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCollections(this.route.snapshot.paramMap.get('id'));
  }

  getCollections(id): void {
    this.collectionsService.get(id)
      .subscribe(
        data => {
          this.currentCollections = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      title: this.currentCollections.title,
      description: this.currentCollections.description,
      published: status
    };

    this.collectionsService.update(this.currentCollections.id, data)
      .subscribe(
        response => {
          this.currentCollections.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateCollections(): void {
    this.collectionsService.update(this.currentCollections.id, this.currentCollections)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The collection was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCollections(): void {
    this.collectionsService.delete(this.currentCollections.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/collections']);
        },
        error => {
          console.log(error);
        });
  }
}
