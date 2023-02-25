fetch('http://localhost:3000/user')
  .then((response) => response.json())
  .then((data) => {
    for(let i = 0; i < data.arr.length; i++){
    let name = data.arr[i].name;
    let dbUser = "#"+name+" span";
    
    document.querySelector(dbUser).innerText = data.arr[i].bodovi;
    }
  });


let win = document.querySelector("#win");
win.style.display = "none";
let anaSaveBtn = document.querySelector(".anaSave");
let anaUndoBtn = document.querySelector(".anaUndo");
let anaInput = document.querySelector(".anaNum");
let anaArr = [0];
let zeljkoSaveBtn = document.querySelector(".zeljkoSave");
let zeljkoUndoBtn = document.querySelector(".zeljkoUndo");
let zeljkoInput = document.querySelector(".zeljkoNum");
let zeljkoArr = [0];
let marijaSaveBtn = document.querySelector(".marijaSave");
let marijaUndoBtn = document.querySelector(".marijaUndo");
let marijaInput = document.querySelector(".marijaNum");
let marijaArr = [0];
let josipSaveBtn = document.querySelector(".josipSave");
let josipUndoBtn = document.querySelector(".josipUndo");
let josipInput = document.querySelector(".josipNum");
let josipArr = [0];
let winArr = [];
let winner = "" 
//ana


anaSaveBtn.addEventListener("click",function(e){
  e.preventDefault();
  let node = document.createElement("div");
  let text = document.createTextNode(anaInput.value);
  node.appendChild(text);
  document.querySelector(".anaBodovi").appendChild(node);
  node.classList.add("anaBod");
  anaArr.push(parseInt(node.innerHTML));
  let rez = parseInt(node.innerHTML) + parseInt(anaArr[anaArr.length - 2]);
  anaArr.push(rez);
  node.innerHTML = rez;
  anaUndoBtn.style.display = "inline";
  if (anaArr.length > 16){
    win.style.display = "inline"
  }
 if(((anaArr.length - 1)/2) % 4 === 0){
  let node = document.createElement("div");
  let text = document.createTextNode("------------------");
  node.appendChild(text);
  document.querySelector(".anaBodovi").appendChild(node);
 }
})

anaUndoBtn.addEventListener("click",function(e){
  e.preventDefault();
  let node = document.querySelectorAll(".anaBod");
  node[node.length - 1].innerHTML = ""
  anaArr.pop();
  anaArr.pop();
  anaUndoBtn.style.display = "none";
})

//marija
marijaSaveBtn.addEventListener("click",function(e){
  e.preventDefault();
  let node = document.createElement("div");
  let text = document.createTextNode(marijaInput.value);
  node.appendChild(text);
  document.querySelector(".marijaBodovi").appendChild(node);
  node.classList.add("marijaBod");
  marijaArr.push(parseInt(node.innerHTML));
  let rez = parseInt(node.innerHTML) + parseInt(marijaArr[marijaArr.length - 2]);
  marijaArr.push(rez);
  node.innerHTML = rez;
  marijaUndoBtn.style.display = "inline";
  if (marijaArr.length > 16){
    win.style.display = "inline"
  }
 if(((marijaArr.length - 1)/2) % 4 === 0){
  let node = document.createElement("div");
  let text = document.createTextNode("------------------");
  node.appendChild(text);
  document.querySelector(".marijaBodovi").appendChild(node);
 }
})
marijaUndoBtn.addEventListener("click",function(e){
  e.preventDefault();
  let node = document.querySelectorAll(".marijaBod");
  node[node.length - 1].innerHTML = ""
  marijaArr.pop();
  marijaArr.pop();
  marijaUndoBtn.style.display = "none";
})

//josip
josipSaveBtn.addEventListener("click",function(e){
  e.preventDefault();
  let node = document.createElement("div");
  let text = document.createTextNode(josipInput.value);
  node.appendChild(text);
  document.querySelector(".josipBodovi").appendChild(node);
  node.classList.add("josipBod");
  josipArr.push(parseInt(node.innerHTML));
  let rez = parseInt(node.innerHTML) + parseInt(josipArr[josipArr.length - 2]);
  josipArr.push(rez);
  node.innerHTML = rez;
  josipUndoBtn.style.display = "inline";
  if (josipArr.length > 16){
    win.style.display = "inline"
  }
 if(((josipArr.length - 1)/2) % 4 === 0){
  let node = document.createElement("div");
  let text = document.createTextNode("------------------");
  node.appendChild(text);
  document.querySelector(".josipBodovi").appendChild(node);
 }
})
josipUndoBtn.addEventListener("click",function(e){
  e.preventDefault();
  let node = document.querySelectorAll(".josipBod");
  node[node.length - 1].innerHTML = ""
  josipArr.pop();
  josipArr.pop();
  josipUndoBtn.style.display = "none";
})

//zeljko
zeljkoSaveBtn.addEventListener("click",function(e){
  e.preventDefault();
  let node = document.createElement("div");
  let text = document.createTextNode(zeljkoInput.value);
  node.appendChild(text);
  document.querySelector(".zeljkoBodovi").appendChild(node);
  node.classList.add("zeljkoBod");
  zeljkoArr.push(parseInt(node.innerHTML));
  let rez = parseInt(node.innerHTML) + parseInt(zeljkoArr[zeljkoArr.length - 2]);
  zeljkoArr.push(rez);
  node.innerHTML = rez;
  zeljkoUndoBtn.style.display = "inline";
  if (zeljkoArr.length > 16){
    win.style.display = "inline"
  }
 if(((zeljkoArr.length - 1)/2) % 4 === 0){
  let node = document.createElement("div");
  let text = document.createTextNode("------------------");
  node.appendChild(text);
  document.querySelector(".zeljkoBodovi").appendChild(node);
 }
  
})
zeljkoUndoBtn.addEventListener("click",function(e){
  e.preventDefault();
  let node = document.querySelectorAll(".zeljkoBod");
  node[node.length - 1].innerHTML = ""
  zeljkoArr.pop();
  zeljkoArr.pop();
  zeljkoUndoBtn.style.display = "none";
})

let reset = document.querySelector("#reset");
reset.addEventListener("click",function(){
  location.reload();
})




win.addEventListener("click", function(){
  winArr.push([anaArr[anaArr.length - 1], "ana"]);
  winArr.push([marijaArr[marijaArr.length - 1], "marija"]);
  winArr.push([josipArr[josipArr.length - 1], "josip"]);
  winArr.push([zeljkoArr[zeljkoArr.length - 1], "zeljko"]);
  winArr.sort((a,b) => a[0] - b[0]);
  let winner = winArr[0][1]; //name
  let dbUser = "#"+ winner +" span";
  let q = document.querySelector(dbUser);
  let bodovi = parseInt(q.innerHTML) + 1; //bodovi
  alert("POBJEDNIK JE " + winner );
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: winner, bodovi: bodovi })
  };
  fetch('http://localhost:3000/winner', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
  })