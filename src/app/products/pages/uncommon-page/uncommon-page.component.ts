import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18Select
  public name: string='Sebastian';
  public gender: 'male'|'female'='male';

  //objeto map con las opciones del valor
  public invitationMap={
    'male':'invitarlo',
    'female':'invitarla'
  }

  changeClient():void{
    this.name='Melissa';
    this.gender='female';
  }

  //i18nPlural
  public clients:string[]=['Maria','Pedro','Marcos','Juan','Marcela','Camilo','Cristian',]
  public clientsMap={
    '=0':'No tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando'

  }

  deleteClient():void{
    this.clients.shift();
  }
}
