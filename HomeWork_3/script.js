'use strict';
/*Задание 1: "Управление персоналом компании"
Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя) в консоль.
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
 Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo(); // "Name: John Smith"
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo(); // "Name: John Doe, Department: Sales"*/
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}.`);
  }
}
class Manager extends Employee {
  constructor(name, age, department, salary) {
    super(name, age);
    this.department = department;
    this.salary = salary;
  }
  displayInfo() {
    super.displayInfo();
    console.log(`Department: ${this.department}, Salary: ${this.salary}$.`);
  }
}
const employee = new Employee("John Smith", 35);
employee.displayInfo(); 
const manager = new Manager("Jane Doe", 29, "Sales", 3000);
manager.displayInfo(); 

/*Задание 2: "Управление списком заказов"
Реализуйте класс Product (товар), который имеет следующие свойства и методы:
Свойство name - название товара.
Свойство price - цена товара.
Свойство quantity - количество товара.
Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
Свойство id (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект класса Product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
// Пример использования:
const order = new Order(12345);
const product1 = new Product("Phone", 500, 2);
order.addProduct(product1);
const product2 = new Product("Headphones", 100, 1);
order.addProduct(product2);
console.log(order.getTotalPrice()); // Вывод: 1100 */
class Product {
  constructor(productName, productPrice, productQuantity) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
  }
  print() {
    console.log(`Product name: ${this.productName}, Price: ${this.productPrice}$, Quantity: ${this.productQuantity}.`);
  }
}
class Order {
  constructor(orderId){
    this.orderId = orderId;
    this.orderProducts = [];
    this.totalPrice = 0;
  }
  addProduct(product) {
    this.orderProducts.push(product);
  }
  getTotalPrice() {
    let totalPrice = 0;
    this.orderProducts.forEach(product => {
      totalPrice += product.productPrice * product.productQuantity;
    });
    return totalPrice;
  }
  changeTotalPrice(totalPrice) {
    this.totalPrice = totalPrice;
  } 
  introduce() {
    console.log(`Order number: ${this.orderId}.`);
    console.log('Product list:');
    this.orderProducts.forEach(product => {
      product.print();
    });
    console.log(`Total order sum: ${this.totalPrice}$.`);
  }
}
const product1 = new Product('Phone', 50, 2);
const product2 = new Product('TV', 250, 1);
const product3 = new Product('Toy', 20, 3);
const product4 = new Product('Monitor', 150, 1);
const product5 = new Product('Game console', 200, 1);
const product6 = new Product('Tablet', 100, 1);

const order1 = new Order(123);
order1.addProduct(product1);
order1.addProduct(product2);
order1.addProduct(product3);
order1.addProduct(product4);
order1.changeTotalPrice(order1.getTotalPrice());
order1.introduce();

const order2 = new Order(124);
order2.addProduct(product2);
order2.addProduct(product6);
order2.addProduct(product5);
order2.changeTotalPrice(order2.getTotalPrice());
order2.introduce();