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

// {
//   function timeout(ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }
  
//   async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value,ms);
//   }
  
//   asyncPrint('hello world', 50);
// }

{
  let draw = function(count) {
    // Business Logic Code
    console.info(`剩余${count}次`);
  }

  let residue = function* (count) {
    while(count > 0) {
      count--;
      yield draw(count);
    }
  }

  let star = residue(5);
  let btn = document.createElement('button');
  btn.id = 'start';
  btn.textContent = '抽奖哈哈哈';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click', function(){
    star.next();
  }, false);
}

{
  // 长轮询
  let ajax = function* (callCount) {
    yield new Promise(function(resolve, reject) {
      console.log('call api');
      setTimeout(function() {
        if(callCount > 2) {
          resolve({code:0});
        } else {
          resolve({code:-1});
        }        
      }, 200);
    })
  }
  
  let pull = function() {
    callCount++;
    let generator = ajax(callCount);
    let step = generator.next();
    step.value.then(function(d) {
      if(d.code!=0) {
        setTimeout(function () {
          console.log('wait');
          pull();
        }, 1000);
      } else {
        console.log(d);
      }
    })
  }
  let callCount = 0;
  pull();
}