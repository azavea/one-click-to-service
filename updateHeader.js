var intervalId = null;
let callback = function () {
    let favoriteDiv = document.querySelector("[data-testid='favorites-container']");
    if (favoriteDiv) {
        let header = document.querySelector("header").firstChild;
        let links = [...favoriteDiv.getElementsByTagName("a")];
        links.forEach((n) => {
            let clonedNode = n.cloneNode(true);
            clonedNode.setAttribute("style", "padding-right: 5px; width: auto; font-family: 'Amazon Ember','Helvetica Neue',Roboto,Arial,sans-serif;");
            header.appendChild(clonedNode);
        });
        clearInterval(intervalId);
    }
};

// Set interval id so this stops checking once it is set
intervalId = setInterval(callback, 1000);
