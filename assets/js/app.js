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