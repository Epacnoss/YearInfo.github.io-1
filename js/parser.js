fetch("https://l5info.live/info.json")
    .then((response) => response.json())
    .then((data) => {
        let page = document.getElementById("page");
        document.getElementById("title").innerText = data.title;
        data.sections.forEach(section => {

            let sectionHTML = "";
            sectionHTML += `<div class=section><h2>${section.title}</h2><ul>`;
            section.items.forEach(item => {
                if(typeof item == "object") sectionHTML += `<li><a href=${item.url}>${item.text}</a></li>`;
                else sectionHTML += `<li>${item}</li>`;
            });
            sectionHTML += `</ul></div>`
            page.innerHTML += sectionHTML;
            
        });
    })
    .catch((err) => {
        console.log(err)
    });