import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Snack } from '../../models/snack';
import { SnackService } from '../../services/snack.service';
import { SnackCardComponent } from '../snack-card/snack-card.component';
import { Observable } from 'rxjs/internal/Observable';




@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.css']
})
export class SnackListComponent implements OnInit {
  snacks: Snack[] = [
    new Snack(1, 'popcorn salé', "../../../../assets/images/pop_salt_m.jpg", "moyen", 2.5, "popcorn", 0),
    new Snack(2, 'popcorn salé', "../../../../assets/images/pop_salt_g.jpg", "grand", 3.5, "popcorn", 0),
    new Snack(3, 'popcorn caramel', "../../../../assets/images/popcorn_caramel_m.jpg", "moyen", 2.5, "popcorn", 0),
    new Snack(4, 'popcorn caramel', "../../../../assets/images/popcorn_caramel_g.jpg", "grand", 3.5, "popcorn", 0),
    new Snack(5, 'coca-cola', "../../../../assets/images/coke_m.jpg", "moyen", 2.5, "boissons", 0),
    new Snack(6, 'coca-cola', "../../../../assets/images/coke_g.jpg", "grand", 3.5, "boissons", 0),
    new Snack(7, 'fanta', "../../../../assets/images/fanta_m.jpg", "moyen", 2.5, "boissons", 0),
    new Snack(8, 'fanta', "../../../../assets/images/fanta_g.jpg", "grand", 3.5, "boissons", 0),
    new Snack(9, 'sprite', "../../../../assets/images/sprite_m.jpg", "moyen", 2.5, "boissons", 0),
    new Snack(10, 'sprite', "../../../../assets/images/sprite_g.jpg", "grand", 3.5, "boissons", 0),
    new Snack(11, 'magnum', "../../../../assets/images/magnum_classic.jpg", "classic", 2.5, "glaces", 0),
    new Snack(12, 'cornetto', "../../../../assets/images/cornetto_vanille.jpg", "vanille", 2.5, "glaces", 0)
  ];

  snacks$: Observable<Snack[]>;

  //count: number;

  @ViewChildren(SnackCardComponent)
  snacksQuery: QueryList<SnackCardComponent>;

  // create attribut <portee> <nom>:<type>
  // Angular use constructeur for DI

  constructor(private snackService: SnackService) { }

  ngOnInit() {
    this.loadSnacks();
  }

  loadSnacks() {
    // observable.subscribe
    this.snackService.getSnacks()
      .subscribe({
        next : res => {
          this.snacks = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
    }
}
