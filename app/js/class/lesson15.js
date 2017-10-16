// {
//   // genertaor基本定义
//   let tell=function* (){
//     yield 'a';
//     yield 'b';
//     return 'c'
//   };

//   let k=tell();

//   console.log(k.next());
//   console.log(k.next());
//   console.log(k.next());
//   console.log(k.next());
// }

// {
//   let obj={};
//   obj[Symbol.iterator]=function* (){
//     yield 1;
//     yield 2;
//     yield 3;
//   }

//   for(let value of obj){
//     console.log('value',value);
//   }
//   for(let key of obj) {
//     console.log('key', key);
//   }
//   for(let item of obj) {
//     console.log('item', item);
//   }
// }

{
  let state=function* (){
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status);
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }

/**
 * http://es6.ruanyifeng.com/#docs/async
 * Try more examples
 */

{
  function timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value,ms);
  }
  
  asyncPrint('hello world', 50);
}

