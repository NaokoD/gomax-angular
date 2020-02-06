import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Snack } from '../../models/snack';
import { SnackService } from '../../services/snack.service';
import { SnackCardComponent } from '../snack-card/snack-card.component';
import { Observable } from 'rxjs/internal/Observable';
//import { Observable } from '../../../../assets/images/pop_salt_m.jpg';




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

<<<<<<< HEAD






  console
=======
>>>>>>> 2a37de91d707833e786b3d459802519a45189dec
  snacks$: Observable<Snack[]>;

  //count: number;

  @ViewChildren(SnackCardComponent)
  snacksQuery: QueryList<SnackCardComponent>;

  // create attribut <portee> <nom>:<type>
  // Angular use constructeur for DI

  constructor(private snackService: SnackService) { }

  ngOnInit() {
    this.loadSnacksObservable();
    this.loadSnack();
  }

  loadSnacksPromise() {
    this.snackService.getSnacksPromise()
      .then(res => {
        console.log('mon résultat', res);
      });
  }

  loadSnacksObservable() {
    // observable.subscribe
    this.snackService.getSnacksObservable()
      .subscribe(
        res => this.snacks = res);
  }

  loadSnack() {
    this.snacks$ = this.snackService.getSnacksObservable();
  }
}
