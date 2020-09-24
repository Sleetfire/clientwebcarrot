import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/_services/collections.service';

@Component({
  selector: 'app-add-collections',
  templateUrl: './add-collections.component.html',
  styleUrls: ['./add-collections.component.css']
})
export class AddCollectionsComponent implements OnInit {
  collections = {
    title: '',
    description: '',
    published: false,
    user_id: ''
  };
  submitted = false;

  constructor(private collectionsService: CollectionsService) { }

  ngOnInit(): void {
  }

  saveCollections(): void {
    const data = {
      title: this.collections.title,
      description: this.collections.description
    };

    this.collectionsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCollections(): void {
    this.submitted = false;
    this.collections = {
      title: '',
      description: '',
      published: false,
      user_id: ''
    };
  }

}
