import { HeroeService } from './../../services/heroe.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();



constructor( private heroeService: HeroeService){}

ngOnInit() {

}

guardar(form: NgForm){

  if(form.invalid){
console.log('Formulario no valido');
return;

  }

if(this.heroe.id){
  this.heroeService.actualizarheroe(this.heroe)
  .subscribe( resp=>{
console.log(resp);


  });
}

else{
  this.heroeService.crearHeroe(this.heroe)
  .subscribe( resp=>{
console.log(resp);
this.heroe=resp;

  });
}






}

}








