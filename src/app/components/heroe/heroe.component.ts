import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"],
  providers: [HeroesService]
})
export class HeroeComponent implements OnInit {
  private heroe: Heroe;
  private companiaurl: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
  
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      values => {
        console.log(values);

        this.heroe = this._heroesService.getHeroe(
          parseInt(values.id)
        );
        console.log(this.heroe);
        if (this.heroe.casa == "DC") {
          this.companiaurl="assets/img/dc.jpg";
        } else {
          this.companiaurl="assets/img/marvel.jpg";
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
