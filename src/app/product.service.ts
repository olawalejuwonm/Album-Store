import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import { Album } from './album';
import { Product } from './product';
// import { map } from 'rxjs/operator/map';
// import { Observable, Operator  } from "rxjs"
// import { Observable  } from "rxjs"


@Injectable()

export class ProductService {
  private _albumUrl: string = '../assets/album.json';
  private _productsUrl: string = '../assets/products.json';
  // get albumUrl(): string {
  //   return this._albumUrl;
  // }
  // set albumUrl(value: string) {
  //   this._albumUrl = value;
  //   // this.filtredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  // }
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      .map((response => <Album>response.json()));

  }
  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl)
    .map((response => <Product[]>response.json()));

  }
  //  .pipe(
  //   (response) => response.json()
  //   //  map(response => response.json())
  //  )
  //   .subscribe({
  //    next: (response) => response.json()
  //  })
  constructor(private _http: Http) { }



}
