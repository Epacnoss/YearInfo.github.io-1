fetch("https://l5info.live/info.json")
    .then((response) => response.json())
    .then((data) => {
        let page = document.getElementById("page");
        document.getElementById("title").innerText = data.title;
        data.sections.forEach(section => {

            page.innerHTML += `
                <div class=section>
                <h2>${section.title}</h2>
                <ul>
            `;

            section.items.forEach(item => {
                if(typeof item == "object") {
                    page.innerHTML += `
                        <li><a href=${item.url}>${item.text}</a></li>
                    `   
                }
                else {
                    page.innerHTML += `
                        <li>${item}</li>
                    `
                }
            });

            page.innerHTML += `
                </ul>
                </div>
            `
            
        });
    })
    .catch((err) => {
        console.log(err)
    });

console.log(info);

let page = document.getElementById("page");
info.sections.forEach(section => {
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