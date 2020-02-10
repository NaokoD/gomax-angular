import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
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
  snacks: Snack[] = [];
  total: number = 0;

  //montant: SnackCardComponent;



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
        next: res => {
          this.snacks = res;
          console.log(res)
        },
        error: e => console.log(e),
        complete: () => console.log('Complete')
      });
  }
<<<<<<< HEAD

  getTotal(somme: number) {
    this.total += somme;
  }





=======
>>>>>>> b92c57c5db9030cd2f83046317d090f0ad0b3308
}
