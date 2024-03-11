let like = document.querySelector(".fa-heart");
let remove = document.querySelector(".delete");
let add = document.querySelector(".comment");
let section = document.querySelector(".section");
let body = document.body;

//todo like function

function lik() {
  console.log("like");
  like.style.color = "red";
}

//todo comments function

function comments() {
  let article = document.querySelector("article");

  article.innerHTML += `<input type="text" placeholder='Enter comments..' class="input">
  <button href="" onclick="save()" class="add">Save</button>
  `;
}

//todo save comments function

function save() {
  let input = document.querySelector(".input");
  let inputValue = input.value;

  if (inputValue !== undefined) {
    let aside = document.querySelector("aside");
    let p = document.createElement("p");
    p.style.border = "0.3px solid black";
    p.innerHTML = inputValue;

    aside.append(p);
  }
}

//todo delete comments function

function deleteComm() {
  let aside = document.querySelector("aside");

  if (aside !== "") {
    aside.innerHTML = "";
  }
}
