'use strict';
// создаём класс Toys
class Toys {
  constructor (toyName, toyManufacturer, toyPrice){
    this.toyName = toyName;
    this.toyManufacturer = toyManufacturer;
    this.toyPrice = toyPrice;
  }
  getToyName() { return this.toyName; }

  getToyManufacturer() { return this.toyManufacturer; }

  getToyPrice() { return this.toyPrice; }

  displayInfo(){
    console.log(`Toy name: ${this.toyName}. Toy manufacturer: ${this.toyManufacturer}. Toy price: ${this.toyPrice}.`);
  }
}
// рандомное число
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// создание экземпляра класса
function generateToy() {
  const toyNames = ["Teddy bear", "Doll", "Car", "Airplane", "Constructor", "Board game"];
  const toyManufacturers = ["Classic World", "Terra", "Yookidoo", "Glitter Girls", "OOLY", "Tiny Love"];
  const toyPrices = [150, 100, 120, 86, 32, 55, 120, 45, 99];
  const toy = new Toys(toyNames[getRandomInt(toyNames.length)], toyManufacturers[getRandomInt(toyManufacturers.length)], toyPrices[getRandomInt(toyPrices.length)]);
  return toy;
}
// создание списка игрушек
function createCatalogToys(count) {
  const catalog = [];
  for (let i = 0; i < count; i++) {
    catalog.push(generateToy());
  }
  return catalog;
}
// показать список игрушек
function showCatalogToys(catalog) {
  if (catalog.length !== 0) {
    catalog.forEach(element => {
      element.displayInfo();
    });
  } else {
    console.log('Product not found.');
  } 
}
// найти игрушку в списке  по названию игрушки
function findToyByName(catalog, name) {
  const result = [];
  catalog.forEach(element => {
    if (element.getToyName() === name) {
      result.push(element);
    } 
  });
  return result;
}
// найти игрушку в списке  по названию фирмы-производителя
function findToyByCompany(catalog, nameCompany) {
  const result = [];
  catalog.forEach(element => {
    if (element.getToyManufacturer() === nameCompany) {
      result.push(element);
    } 
  });
  return result;
}
// найти игрушку в списке  по цене
function findToyByPrice(catalog, minPrice, maxPrice) {
  const result = [];
  catalog.forEach(element => {
    if (element.getToyPrice() > minPrice && element.getToyPrice() < maxPrice) {
      result.push(element);
    } 
  });
  return result;
}

const catalogToys = createCatalogToys(10);
showCatalogToys(catalogToys);
console.log('Поиск по названию игрушки');
const foundToys = findToyByName(catalogToys, "Barby");
showCatalogToys(foundToys);
const foundToys1 = findToyByName(catalogToys, "Airplane");
showCatalogToys(foundToys1);
console.log('Поиск по названию фирмы-производителя');
const foundToys2 = findToyByCompany(catalogToys, "Yookidoo");
showCatalogToys(foundToys2);
console.log('Поиск по цене');
const foundToys3 = findToyByPrice(catalogToys, 30, 100);
showCatalogToys(foundToys3);




