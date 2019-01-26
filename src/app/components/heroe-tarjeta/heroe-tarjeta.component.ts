import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroe-tarjeta",
  templateUrl: "./heroe-tarjeta.component.html",
  styleUrls: ["./heroe-tarjeta.component.css"]
})
export class HeroeTarjetaComponent implements OnInit {
  //aqui decimos para propiedad heroe puede venir de afuera
  @Input()
  heroe: any = {};
  @Input()
  indice: number;
  //@Output()
  //heroeSeleccionado: EventEmitter<number>; //aqui le decimos el componente el cual podra consumir el padre.
  constructor(private _router: Router) {
    //this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {}

  verHeroe() {
//    this.heroeSeleccionado.emit(this.indice);//emite lo que sea que yo te estoy diciendo
     this._router.navigate(["/heroe", this.indice]);
  }
}
