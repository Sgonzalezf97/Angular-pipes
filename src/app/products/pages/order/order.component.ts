import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean=false;

  public orderBy: keyof Hero  ='name';

  public heroes: Hero[]=[
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Ironman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    },
  ]

  toggleUpperCase():void{
    this.isUpperCase= !this.isUpperCase;
  }

  changeOrder (value: keyof Hero){
    this.orderBy = value;
  }
}
