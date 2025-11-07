const tri = document.getElementById("button-3way");
const range = document.getElementById("triRange");

function updateState() {
  tri.dataset.state = range.value;
}
range.addEventListener("input", updateState);
updateState();