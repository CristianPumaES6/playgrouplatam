import { Injectable } from '@angular/core';
import { Producto } from './producto/producto';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { FileUploadModel } from './fileUploadedModel';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public url: string;
  
  constructor(
    private httpClient: HttpClient
    ) { 


    this.url = 'localhost';

  }



    //---------------------------------------------------------------------------//
    //----------------------------- Services ------------------------------------//
    //---[ Get<Class>s, Get<Class>, Create<Class>, Save<Class>, Delete<Class>]---//
    //---------------------------------------------------------------------------//

    GetProducto(productoId: Number): Observable<Producto> { 

      // Armo el request
      let url: string = this.url + '/producto/' + productoId;
      let headers: HttpHeaders = new HttpHeaders(
          {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ',
          });
      let options: any = { headers: headers, responseType: 'json' };

      // Mando consulta al API
      return this.httpClient.get(url, options).pipe(
          map(
              (response: any) => {
                  if (response.status && response.status === 200) {
                      return response.data;
                  } else {
                      throw response.description || response.error || '';
                  }
              }
          )
      );
  }


  GetProductos(producto: Producto): Observable<Producto[]> {
      // Armo el request
      let url: string = this.url + '/producto?id=' + (producto.id || '') + '&nombre=' + (producto.nombre || '');
      let headers: HttpHeaders = new HttpHeaders(
          {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ',
          });
      let options: any = { headers: headers, responseType: 'json' };

      // Mando consulta al API
      return this.httpClient.get(url, options).pipe(
          map(
              (response: any) => {
                  if (response.status && response.status === 200) {
                      return response.data;
                  } else {
                      throw response.description || response.error || '';
                  }
              }
          )
      );
  }


  CreateProducto(producto: Producto): Observable<Producto> {
      // Armo el request
      let url: string = this.url + '/producto/create';
      let headers: HttpHeaders = new HttpHeaders(
          {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ',
          });


      let body: string = JSON.stringify(producto);
      let options: any = { headers: headers, responseType: 'json' };

      // Mando consulta al API
      return this.httpClient.post(url, body, options).pipe(
          map(
              (response: any) => {
                  if (response.status && response.status === 200) {
                      return response.data;
                  } else {
                      throw response.description || response.error || '';
                  }
              }
          )
      );
  }


  SaveProducto(producto: Producto): Observable<Producto> {
      // Armo el request
      let url: string = this.url + '/producto/' + producto.id + '/update';
      let headers: HttpHeaders = new HttpHeaders(
          {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ',
          });
      let body: string = JSON.stringify(producto);
      let options: any = { headers: headers, responseType: 'json' };

      // Mando consulta al API
      return this.httpClient.put(url, body, options).pipe(
          map(
              (response: any) => {
                  if (response.status && response.status === 200) {
                      return response.data;
                  } else {
                      throw response.description || response.error || '';
                  }
              }
          )
      );
  }


  DeleteProducto(producto: Producto): Observable<Producto> {
      // Armo el request
      let url: string = this.url + '/producto/' + producto.id + '/delete';
      let headers: HttpHeaders = new HttpHeaders(
          {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ',
          });
      let options: any = { headers: headers, responseType: 'json' };

      // Mando consulta al API
      return this.httpClient.delete(url, options).pipe(
          map(
              (response: any) => {

                  if (response.status && response.status === 200) {
                      return response.data;
                  } else {
                      throw response.description || response.error || '';
                  }

              }
          )
      );
  }

  UploadPerfil(id: number, file: FileUploadModel): Observable<any> {
      // Armo el request
      let url: string = this.url + '/producto/' + id + '/image';
      let headers: HttpHeaders = new HttpHeaders(
          {
              'Authorization': 'Bearer ',
          });
      // Creamos el obj formulario.
      const formData = new FormData();
      // Agregamos la imagen
      formData.append('image', file.data);

      const httpRequest = new HttpRequest('POST', url, formData, {
          headers: headers,
          reportProgress: true
      });
      // Mando consulta al API
      return this.httpClient.request(httpRequest);
  }
  // -----------------------------------------

}
