const form = document.querySelector("#google-search-form");

function searchKeyword(e) {
  e.preventDefault();

  const keyword = e.target.keyword.value;
  fetch(`http://localhost:3000/search/${keyword}`)
    .then((r) => r.json())
    .then(appendResults)
    .catch(console.warn);
}

{
  /* <div class="search-results">
    <a href="'https://en.wikipedia.org/wiki/Cat">Cat - Wikipedia</a>
    <p class="text-results">
        The cat (Felis catus) is a domestic species of small carnivorous
        mammal. It is the only domesticated species in the family Felidae and
        is often referred to as the domestic cat to distinguish it from the
        wild members of the family.
    </p>
</div> */
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

form.addEventListener("submit", searchKeyword);
