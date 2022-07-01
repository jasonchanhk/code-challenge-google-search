function fetchResultData(){
    const params = (new URL(document.location)).searchParams
    const keyword = params.get('keyword')
    console.log(keyword)
    fetch(`http://localhost:3000/search/${keyword}`)
        .then(handleError)
        .then(appendResults)
        .catch(createAlert);
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

fetchResultData()
