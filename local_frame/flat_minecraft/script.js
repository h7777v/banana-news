var state = 0;
// 0 = pre-content

var pages = [
    document.getElementById('worldSector'),
    document.getElementById('pre-content'),
    document.getElementById('setting'),
    document.getElementById('CreateWorld')
]

function closePage(){
    for (let i = 0;i < pages.length;i++){
        pages[i].style.display = 'none'
    }
}

function updatePage(){
    switch (state){
        case 0:
            break;
    }
}