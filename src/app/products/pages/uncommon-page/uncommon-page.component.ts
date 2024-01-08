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

  public clientsMap={ //este map nos sirve para cuando se tenga el valor de ese texto
    '=0':'No tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando'

  }

  deleteClient():void{
    this.clients.shift();
  }

  //slice
  // slice:0:2 corta los valores del arreglo desde el 0 al 2

  //keyValue  --> este sirve para poder iterar sobre las propiedades del objeto conviertiendolas en clave valor
  public person={
    name:'Sebastian',
    age:36,
    address:'Bogotá, Colombia'
  }

}
