//bai tap 1

function toggleButton(idIcon, idContent) {
  const content = document.querySelector(`${idContent}`);
  const block = document.querySelectorAll("#test .block");
  content.classList.toggle("show");
  if (content.classList.contains("show")) {
    block.forEach((item) => item.childNodes[3].classList.remove("show"));
    content.classList.add("show");
  }
  const arrow = document.querySelector(`${idIcon}`);
  arrow.classList.toggle("rotate");
}
//ket thuc bai tap 1

//popovers
function popovers() {
  const popovers1 = document.querySelector('#popovers');
  popovers1.classList.toggle('show');
}

//toasts
const closeList = document.querySelectorAll(".btn-close");
const divList = document.querySelectorAll(".toast");

function close() {
    divList.forEach(() => {
        closeList.forEach((btn)=>{
            btn.addEventListener('click',()=>{
                const div = document.querySelector(".toast");
                console.log(div);
                div.classList.toggle('close')
            })
        })
});
}
close();


function funcToasts(){

  document.querySelector('#notification-toasts').classList.add('show');
  const myTimeout = setTimeout(() => {
    document.querySelector('#notification-toasts').classList.remove('show');
  }, 2000);

}

//end toasts

//scrollspy
function funcDrop() {
    document.querySelector('#drop1').classList.toggle('show');
}

//dem so lan xuat hien trong chuoi
// function test(){
//   const chuoi = '4732847329847823974xinchaocacban';
//   const tach = chuoi.split('');
//   console.log(tach)
//   const array = [];
//   tach.forEach(item => {
//     if(!array.includes(item)) array.push(item)
//   })
//   const arrayCount = new Array(array.length).fill(0);
//   console.log(arrayCount)
//   array.forEach((item, index) => {
//     tach.forEach(value => {
//       if(value === item) {
//         arrayCount[index] ++;
//       }
//     })
//   })
//   console.log(array)
//   console.log(arrayCount)
// }
// test();

// reduce
function inReduce() {
  const strings = '123454test';
  const arrayString = strings.split('').reduce(function(stringCount, currentString){
    if(typeof stringCount[currentString] !== 'undefined'){
      stringCount[currentString]++;
      return stringCount;
    } else {
      stringCount[currentString] = 1;
      return stringCount;
    }
  },{});
  const demxong = [];
  for(let x in arrayString){
    demxong.push(x + ": " + arrayString[x]);
  }
console.log(demxong)
}
inReduce();