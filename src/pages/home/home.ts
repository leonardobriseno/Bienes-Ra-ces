import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatosPage } from '../datos/datos';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datos=DatosPage;
  favoritos=FavoritosPage;
  Fav=[];
  casas=[
    {vendedor: "Lic. Miguel Angel Magaña", descripcion: "Hermosa residencia en coto privado con vigilancia, cerca de plaza Galerias, Andares, UAG, Patria, AV. Vallarta. acabados en Mármol,madera Tzalam, cantera, teka, cristal templado, granito,acero inoxidable", ubicacion: "Virreyes Residencial", precio: "$20,000,000", terreno: "650m²", imagen: "../assets/1.jpg", telefono: "3312320647"},
    {vendedor: "Pablo Maldonado Padilla", descripcion: "	San Gonzalo 304 frente al parque •	824.46 terreno y 749.91 construcción ,17.36 al norte Frente al sur 35.72 y de fondo 30 •	Planta baja: Recibidor Doble y sala doble altura , comedor ,sala de tv, cuarto de visitas con baño.", ubicacion: "Valle Real", precio: "$23,000,000", terreno: "825m²", imagen: "../assets/2.jpg", telefono: "331076768"},
    {vendedor: "Sr. Manuel", descripcion: "Ciudad Bugambilias primera sección, remato a valor catastral, 4 recamaras", ubicacion: "Ciudad Bugambilias", precio: "$4,600,000", terreno: "390m²", imagen: "../assets/3.jpg", telefono: "3311930496"},
    {vendedor: "Celina Castro", descripcion: "Bodega 4780 m2 •Oficinas 404 m2 •Baños y cuarto de máquinas 50 m2 •Altura libre 11 m •Andenes rampa niveladora 5 •Rampa acceso a nivel bodega 2 •Patio maniobras 42 cajones de estacionamiento 4020 m2 •Sistema contra incendio", ubicacion: "Bodega venta condominio industrial Santa Cruz", precio: "$54,000,000", terreno: "9254m²", imagen: "../assets/4.jpg", telefono: "31212403"},
    {vendedor: "Leticia Perez", descripcion: "Departamentos de lujo, en condominio inmejorable ubicación, 2 roof garden, 10 locales, 96 cajones de estacionamiento. Cerca de escuelas, centros comerciales y vías de acceso rápidas. Fecha de entrega Noviembre 2019.", ubicacion: "Naciones Unidas preventa", precio: "$3,649,149", terreno: "99m²", imagen: "../assets/5.jpg", telefono: "31212402"},
    {vendedor: "Eduardo Ochoa Sanchez", descripcion: "Departamento escriturado, piso 18, 3 recámaras, inmejorable orientación y vista al norte de la ciudad. Dos cajones de estacionamiento en el sótano.", ubicacion: "Central Park Guadalajara en Vallarta", precio: "$7,800,000", terreno: "198m²", imagen: "../assets/6.jpg", telefono: "36410089"},
    {vendedor: "Francisco Ramirez Garcia", descripcion: "Solo 6 unidades en preventa, departamentos listos en diciembre de 2018, aprovecha precio de preventa, 2 recamaras, 2.5 baños, elevador, cocina con granito, a un paso de Plaza Patria, del Country Club, y sobre Av. Patria super ubicados!", ubicacion: "Lagos del Country", precio: "$2,900,000", terreno: "109m²", imagen: "../assets/7.jpeg", telefono: "33110113495"},
    {vendedor: "Jesus Perez", descripcion: "Piso marmol, iluminacion LED, 3 recamaras y 2 banos.", ubicacion: "Departamento en Aurora Jardines del Country", precio: "$3,485,000", terreno: "112m²", imagen: "../assets/8.jpg", telefono: "3334642601"},
    {vendedor: "Edith Gonzalez", descripcion: "CIUDAD del Sol frente avenida, 600 metros, remodelada, desniveles.", ubicacion: "Ciudad del Sol frente a la avenida.", precio: "$9,800,000", terreno: "600m²", imagen: "../assets/9.png", telefono: "3322193231"},
    {vendedor: "Viprosa", descripcion: "PROLONGACION Mariano Otero, Fraccionamiento Los Robles, 2 plantas, cochera 2 autos. Terreno 260 m², construcción 275 m².", ubicacion: "Prolongacion Mariano Otero fraccionamiento Los Robles.", precio: "4,690,000", terreno: "260m²", imagen: "../assets/10.jpg", telefono: "31212403"},
  ]

  constructor(public navCtrl: NavController) {

  }
  clickDatos(c)
  {
    this.navCtrl.push(this.datos,{casa:c, favoritos:this.Fav});
  }
  clickAgregar()
  {
    this.navCtrl.push(this.favoritos, {favoritos: this.Fav});
  }
}
