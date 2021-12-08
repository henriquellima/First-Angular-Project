import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss'],
})
export class AddclientComponent implements OnInit {
  contacts: Array<object> = this.LocalStorageService.get('user') || [{}];
  year: string = '';
  name: String = '';
  cpf: String = '';
  telephone: String = '';
  id: number = this.contacts.length;

  showErrorMessage: boolean = false;

  constructor(public LocalStorageService: LocalStorageService) {
    this.LocalStorageService;
  }

  ngOnInit(): void {}

  handleForm() {
    if (!this.year || !this.name || !this.cpf || !this.telephone) {
      this.showErrorMessage = true;
      return;
    }
    this.showErrorMessage = false;

    if (this.id !== 0) {
      this.contacts = this.LocalStorageService.get('user');
    }
    const object = {
      year: this.year,
      name: this.name,
      cpf: this.cpf,
      telephone: this.telephone,
      id: this.id,
      major: parseInt(this.year) < 18 ? false : true,
    };

    this.contacts.push(object);

    this.LocalStorageService.set('user', this.contacts);
    this.year = '';
    this.cpf = '';
    this.name = '';
    this.year = '';
    this.telephone = '';
    this.id = this.id + 1;
  }
}
