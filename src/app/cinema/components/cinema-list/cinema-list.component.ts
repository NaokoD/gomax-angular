import { Component, OnInit } from '@angular/core';
import { Cinema } from '../../models/cinema';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {
  cinemas : Cinema[] = [
    {id:1, nom:'Masséna', adresse:'8 rue thaon de revel', codePostal:'06300', ville:'Nice'},
    {id:2, nom:'Le Rex', adresse:'40 rue de thionville', codePostal:'75011', ville:'Paris'},
    {id:3, nom:'Wilson', adresse:'20 rue des 7 troubadours', codePostal:'31000', ville:'Toulouse'},
    {id:4, nom:'Labege', adresse:'rue de labège', codePostal:'31400', ville:'Labège'}
  ];

  displayedColumns: string[] = ['id', 'nom', 'adresse', 'codePostal', 'ville', 'actions'];

  constructor() { }

  ngOnInit() {  }

}
