import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../local-storage.service';

@Component({
  selector: 'app-showclients',
  templateUrl: './showclients.component.html',
  styleUrls: ['./showclients.component.scss'],
})
export class ShowclientsComponent implements OnInit {

  userData = this.LocalStorageService.get('user');

  constructor( public LocalStorageService: LocalStorageService ) {
    this.LocalStorageService 
  }

  ngOnInit(): void {}
  
  remove(contactIndex) {
    this.userData.forEach(element => {
      if (element.id === contactIndex){
        this.userData.splice(this.userData.indexOf(element), 1)
      }
    });

    this.LocalStorageService.set('user', this.userData);
  }
}