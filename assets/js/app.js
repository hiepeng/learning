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