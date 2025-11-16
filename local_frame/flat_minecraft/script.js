var state = 0;
// 0 = pre-content

var pages = [
    document.getElementById('pre-content'),
    document.getElementById('worldSector'),
    document.getElementById('setting'),
    document.getElementById('CreateWorld')
]

function updatePage(setState){
    state = setState;
    for (let i = 0;i < pages.length;i++){
        pages[i].style.display = 'none';
    };
    pages[state].style.display = 'block';
}

const init = () => {
    updatePage(0);
}

document.addEventListener("DOMContentLoaded", init);