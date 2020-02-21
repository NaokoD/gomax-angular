import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Horaire } from '../../models/horaire';
import { ActivatedRoute } from '@angular/router';
import { HoraireService } from '../../services/horaire.service';
import { HoraireCardComponent } from '../horaire-card/horaire-card.component';

@Component({
  selector: 'app-horaire-list',
  templateUrl: './horaire-list.component.html',
  styleUrls: ['./horaire-list.component.css']
})
export class HoraireListComponent implements OnInit {

  horaires: Horaire[];

  @ViewChildren(HoraireCardComponent)
  horairesQuery: QueryList<HoraireCardComponent>;

  // create attribute => <portee> <nom>:<type>
  // Angular use constructor for DI
  constructor(private route: ActivatedRoute, private horaireService: HoraireService) { }

  /**
   * Description
   */
  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.loadHoraires();
  }

  loadHorairesByFilm(idFilm: number) {
    this.horaireService.getHorairesByFilm(idFilm)
      .subscribe({
        next: res => {
          this.horaires = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }

  loadHoraires() {
    this.horaireService.getHoraires()
      .subscribe({
        next: res => {
          this.horaires = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }


}
