import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  public listTareas: Tarea [] = [];
  public nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    
    // crear un objeto tarea

    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado:false
    }

    // Agregar objeto Tarea al Array

    this.listTareas.push(tarea);
    // Reset Form

    this. nombreTarea = '';
  }

  eliminarTarea(index:number):void{
   // console.log(index)
    this.listTareas.splice(index,1);

  }

  actualizarTarea(tarea: Tarea, index:number){

    this.listTareas[index].estado=!tarea.estado;


  }

}
