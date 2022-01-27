console.log('hi')

const tabs = document.querySelectorAll('[data-tab-target')
const tabContents = document.querySelectorAll('[data-tab-content]')
const openPopButtons = document.querySelectorAll('[data-pop-target]')
const closePopButtons = document.querySelectorAll('[data-close-pop]')
const overlay = document.getElementById('overlay')

openPopButtons.forEach(button => {
    button.addEventListener('click', () => {
        const pop = document.querySelector(button.dataset.popTarget)
        openPop(pop)
    })
})

closePopButtons.forEach(button => {
    button.addEventListener('click', () => {
        const pop = button.closest('.pop')
        closePop(pop)
    })
})

overlay.addEventListener('click', () => {
    constPop = document.querySelectorAll('.modal.active')
    pop.forEach(pop => {
        closePop(pop)
    })
})

overlay.addEventListener('click', () => {
    const pop = document.querySelectorAll('.pop.active')
    pop.forEach(pop => {
        closePop(pop)
    })
})


function openPop(pop) {
    if (pop == null) return
    pop.classList.add('active')
    overlay.classList.add('active')
}

function closePop(pop) {
    if (pop == null) return
    pop.classList.remove('active')
    overlay.classList.remove('active')
}

window.addEventListener("contextmenu",function(event){
    event.preventDefault();  
    let x = event.pageX + 'px'
    let y = event.pageY + 'px'
    let contextmenu = document.querySelector("#contextmenu");
    contextmenu.style.top = y;
    contextmenu.style.left = x;
    contextmenu.classList.add("active");
});
window.addEventListener("click",function(event){
    let contextmenu = document.querySelector("#contextmenu");
    contextmenu.classList.remove("active");
});



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach((inputField) => {
      const tableRows = inputField
        .closest("table")
        .querySelectorAll("tbody > tr");
      const headerCell = inputField.closest("th");
      const otherHeaderCells = headerCell.closest("tr").children;
      const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);
      const searchableCells = Array.from(tableRows).map(
        (row) => row.querySelectorAll("td")[columnIndex]
      );
  
      inputField.addEventListener("input", () => {
        const searchQuery = inputField.value.toLowerCase();
  
        for (const tableCell of searchableCells) {
          const row = tableCell.closest("tr");
          const value = tableCell.textContent.toLowerCase().replace(",", "");
  
          row.style.visibility = null;
  
          if (value.search(searchQuery) === -1) {
            row.style.visibility = "collapse";
                }
            }
        })

    })
});



tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})



