fetch("https://l5info.live/info.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("AAAAAAAAAAAA")
    });

let page = document.getElementById("page");
data.sections.forEach(section => {
    page.innerHTML += `
        <div class=section>
            <h2>${section.title}</h2>
            <ul>
    `;

    section.items.forEach(item => {
        page.innerHTML += `
                <li>${item}</li>
        `
    });

    page.innerHTML += `
            </ul>
        </div>
    `
    
    });