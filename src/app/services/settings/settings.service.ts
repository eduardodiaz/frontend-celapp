import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Ajustes } from './Ajustes';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaURL:  'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
   }

  guardarAjustes() {
    console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }



cargarAjustes() {
  if (localStorage.getItem('ajustes')) {
    this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    console.log('cargando del localStorage');

    this.aplicarTema(this.ajustes.tema);
  } else {
    console.log('usando valores por defecto');
  }
}

aplicarTema(tema: string) {
  const url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById ('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaURL = url;

    this.guardarAjustes();
}


}
