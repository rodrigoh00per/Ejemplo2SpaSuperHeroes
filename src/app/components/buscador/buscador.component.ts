import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {HeroesService} from '../../services/heroes.service';
import {Router}from '@angular/router'; 


@Component({
  selector: "app-buscador",
  templateUrl: "../buscador/buscador.component.html",
  styleUrls: ["./buscador.component.css"],
  providers:[HeroesService]
})
export class BuscadorComponent implements OnInit {
  private heroes: any[];
  private valorbus:string;
  constructor(private _activatedRoute: ActivatedRoute,private _heroesService:HeroesService,private _router:Router) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe((value)=>{
      this.valorbus=value.valorbus;
      this.heroes=this._heroesService.buscarHeroe(value.valorbus);
       },(err)=>{
      console.log(err);
       });
  }
  
  verHeroe(indx: number) {
    console.log(indx);
    this._router.navigate(["/heroe",indx]);
  }
}
