import { Injectable } from '@angular/core';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class SallePlanService {

  xml: string;

  constructor() {
    // const parser = new xml2js.Parser({ strict: false, trim: true });
    // parser.parseString(xmlString, (err, result) => {
    //   this.xml = result;
    // });
  }
}
