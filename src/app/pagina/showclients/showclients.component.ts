import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../local-storage.service';

@Component({
  selector: 'app-showclients',
  templateUrl: './showclients.component.html',
  styleUrls: ['./showclients.component.scss'],
})
export class ShowclientsComponent implements OnInit {

  userData: Object[] = JSON.parse(localStorage.getItem('user') || '[{}]');

  constructor( public LocalStorageService: LocalStorageService ) {
    this.LocalStorageService 
  }

  ngOnInit(): void {}
  
  remove(contact) {
    this.userData.forEach(element => {
      if (element === contact){
        this.userData.splice(this.userData.indexOf(element), 1)
      }
    });

    localStorage.setItem('user', JSON.stringify(this.userData));
  }
}
