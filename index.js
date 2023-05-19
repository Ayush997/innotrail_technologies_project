let items = document.querySelectorAll("div");

items.forEach((item) => {
  item.addEventListener("dragstart", dragstart);
});

function dragstart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  this.style.opacity = '0.4';
}

const boxes = document.querySelectorAll("div");

boxes.forEach((box) => {
  box.addEventListener("dragenter", dragenter);
  box.addEventListener("dragover", dragover);
  box.addEventListener("drop", drop);
});
function dragenter(e) {
  e.preventDefault();
}
function dragover(e) {
  e.preventDefault();
}
function drop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  console.log(draggable);
  const target = e.target;
  console.log(target.parentNode);
  console.log(target.nextSibling);
  swap(draggable, target);
  this.style.opacity = '1';
}

function swap(nodeA, nodeB) {
  const parentA = nodeA.parentNode;
  const SiblingA = nodeA.nextSibling;
  nodeB.parentNode.insertBefore(nodeA, nodeB);
  parentA.insertBefore(nodeB, SiblingA);
}

