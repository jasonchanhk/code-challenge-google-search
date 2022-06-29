const form = document.querySelector("#google-search-form");
const directBtn = document.querySelector('#directToRandomPage')

function searchKeyword(e) {
  e.preventDefault();

  const keyword = e.target.keyword.value;
  fetch(`http://localhost:3000/search/${keyword}`)
    .then((r) => r.json())
    .then(appendResults)
    .catch(console.warn);
}

function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function appendResults(data) {
  document.querySelector(".search-result-container").innerHTML = "";
  data.forEach(appendEachResult);
}

function appendEachResult(data) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "search-results");

  const aTag = document.createElement("a");
  setAttributes(aTag, { href: data.link, class: "first-tag" });
  aTag.textContent = data.link;

  const newATag = document.createElement("a");
  newATag.setAttribute("href", data.link);
  newATag.textContent = data.title;


  const newPara = document.createElement("p");
  newPara.setAttribute("class", "text-results");
  newPara.textContent = data.description;

  newDiv.append(aTag, newATag, newPara);

  const resultContainer = document.querySelector(".search-result-container");
  resultContainer.append(newDiv);
}


function directRandom() {
    const keyword = document.querySelector('#keyword').value
    fetch(`http://localhost:3000/search/${keyword}`)
        .then(r => r.json())
        .then(navigate)
        .catch(err => console.error(err.message))
}

function navigate(data) {
    const randomIndex = Math.floor(Math.random() * 9)
    const selected = data[randomIndex]
    window.location.href = `${selected.link}`
}

form.addEventListener('submit', searchKeyword)
directBtn.addEventListener('click', directRandom)
