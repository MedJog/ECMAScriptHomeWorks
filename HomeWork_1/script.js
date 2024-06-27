/*Задание 1
Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
найти минимальное число в массиве, решение задание должно состоять из одной
строки кода.*/
const arr = [1, 5, 7, 9];
console.log('Минимальное число в массиве: ', Math.min(...arr));
console.log('Минимальное число в массиве: ',Math.min(...[-22, 0, 1, 5, 7, 9, -9]));
/*Задание 2
Напишите функцию createCounter, которая создает счетчик и возвращает объект
с двумя методами: increment и decrement. Метод increment должен увеличивать
значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
на 1. Значение счетчика должно быть доступно только через методы объекта,
а не напрямую.*/
function createCounter() {
  let counter = 0;
  function increment() {
    counter++;
  }
  function decrement() {
    counter--;
  }
  function getCounter() {
    return counter;
  }
  return {increment, decrement, getCounter};
}
const count = createCounter();
count.increment();
count.increment();
count.increment();
count.increment();
console.log(count.getCounter());
count.decrement();
count.decrement();
console.log(count.getCounter());
count.decrement();
count.decrement();
console.log(count.getCounter());
// вариант записи
// function createCounter() {
//   let counter = 0;
//   return {
//     increment() {
//       counter++;
//     }, 
//     decrement() {
//       counter--;
//     }, 
//     getCounter() {
//       return counter;
//     },
//   };
// }
// const count = createCounter();
// console.log(count);
// count.decrement();
// console.log(count.getCounter());


/*Задание 3
Напишите рекурсивную функцию findElementByClass, которая принимает корневой
элемент дерева DOM и название класса в качестве аргументов и возвращает первый
найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);*/
function findElementByClass(element, className) {
  if (element.classList.contains(className)) {
    return element;
  } 
  for (child of element.children) {
    // if (child.hasChildNodes) {
      const foundElement = findElementByClass(child, className);
      if (foundElement) return foundElement;
    // } else continue;
  }
   return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log('искомый элемент', targetElement);
const targetElement1 = findElementByClass(rootElement, 'container');
console.log('искомый элемент',targetElement1);
const targetElement2 = findElementByClass(rootElement, 'title');
console.log('искомый элемент',targetElement2);
const targetElement3 = findElementByClass(rootElement, 'text');
console.log('искомый элемент', targetElement3);
const targetElement4 = findElementByClass(rootElement, 'paragraph');
console.log('искомый элемент',targetElement4);
const targetElement5 = findElementByClass(rootElement, 'list');
console.log('искомый элемент',targetElement5);
const targetElement6 = findElementByClass(rootElement, 'list-element');
console.log('искомый элемент',targetElement6);
const targetElement7 = findElementByClass(rootElement, 'heading');
console.log('искомый элемент',targetElement7);
const targetElement8 = findElementByClass(rootElement, 'link');
console.log('искомый элемент',targetElement8);