const form = document.querySelector("#google-search-form");
const directBtn = document.querySelector('#directToRandomPage')

function handleError(response) {
    if (!response.ok) {
        throw Error(response.status);
    } else {
        return response.json();
    }
}

function createAlert(err) {
    if (err.message == 404) {
        alert('Our google does not support this keyword')
    } else if (err.message == 405) {
        alert('Please type in your search keyword')
    }
}

function searchKeyword(e) {
    e.preventDefault();

    const keyword = e.target.keyword.value;
    if (e.submitter.id === "show10Results") {
        window.location.href = `${window.location.origin}/result.html?keyword=${keyword}`
    } else if (e.submitter.id === "directToRandomPage") {
        fetch(`http://localhost:3000/search/${keyword}`)
            .then(handleError)
            .then(navigate)
            .catch(createAlert)
    }

}


function navigate(data) {
    const randomIndex = Math.floor(Math.random() * 9)
    const selected = data[randomIndex]
    window.location.href = `${selected.link}`
}

form.addEventListener('submit', searchKeyword)

