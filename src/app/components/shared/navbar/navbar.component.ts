import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../../services/heroes.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  providers: [HeroesService]
})
export class NavbarComponent implements OnInit {
  private valuebuscar: string;
  constructor(private _heroesService: HeroesService, private _router: Router) {}

  ngOnInit() {}

  buscarHeroe(heroebus: string) {
    this.valuebuscar = heroebus;
    // console.log(heroebus);

    this._router.navigate(["/buscar", heroebus]);
  }
}
