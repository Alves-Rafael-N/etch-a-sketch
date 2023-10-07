const page = document.querySelector("body");

function divMaker (columns,rows){
    for (let i = 0; i < columns; i++){
        const columnDiv = document.createElement("div")
        columnDiv.classList = "column"
        columnDiv.style["display"] = "flex"
        columnDiv.style["width"] = "100%"
        columnDiv.style["height"] = "6.25%"
        page.appendChild(columnDiv)

        for(let c = 0; c < rows; c++){
            const rowDiv = document.createElement("div")
            rowDiv.classList = "row"
            rowDiv.style["width"] = "6.25%"
            rowDiv.addEventListener("mouseover",() => {
                rowDiv.style["background-color"] = "blue"
            })
            
            columnDiv.appendChild(rowDiv)
        }
    }
}

const button = document.querySelector("button")
button.addEventListener('click',() => {
    divMaker(16,16)
})


