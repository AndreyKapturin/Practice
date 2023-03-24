const cards = document.querySelector(".cards")

const link = "https://fakerapi.it/api/v1/images?_quantity=12&_type=pokemon&_height=300"

fetch(link)
    .then(result => {
        return result.json()
    })
    .then(result => {
        result.data.forEach(pok => {
            const div = document.createElement("div");
            const img = document.createElement("img");
            div.classList.add("card");
            img.src = pok.url;
            img.height = 150;
            img.width = 200;
            cards.append(div);
            cards.lastElementChild.append(img)
    })     
    })