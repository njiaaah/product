function rebuildTable () {
    document.getElementById('product-table-container').innerHTML = ''
    for (let i = 0; i < Object.keys(list).length; i++) {
        var div = document.createElement('div')
        let id = i
        div.id = 'item' + id
        div.className = 'product-table-item ' + list[Object.keys(list)[i]].name
        document.getElementById('product-table-container').appendChild(div)

        let name = list[Object.keys(list)[i]].name
        let gindex = list[Object.keys(list)[i]].gindex
        let calo = list[Object.keys(list)[i]].calo
        let carb = list[Object.keys(list)[i]].carb
        let prot = list[Object.keys(list)[i]].prot
        let fat = list[Object.keys(list)[i]].fat
        // let vita = list[Object.keys(list)[i]].vita

        document.getElementById('item' + id).dataset.name = name.toLowerCase()
        document.getElementById('item' + id).dataset.gindex = gindex
        document.getElementById('item' + id).dataset.calo = calo
        document.getElementById('item' + id).dataset.carb = carb
        document.getElementById('item' + id).dataset.prot = prot
        document.getElementById('item' + id).dataset.fat = fat
        // document.getElementById('item' + id).dataset.vita = vita

        let productProperties = [name, gindex, calo, prot, fat, carb]

            for (let x = 0; x < 7; x++ ){
                itemValue = productProperties[x]
                
                let div = document.createElement('div')
                div.className = 'product-' + itemValue 
                if (toString.itemValue = 'name') {
                    itemValue = itemValue
                    div.innerHTML = '<h3>' + itemValue + '</h3>'
                } else {
                    div.innerHTML = '<p>' + itemValue + '</p>' 
                }
                    document.getElementById('item' + i).appendChild(div)            
        }
    }
        
}

let isResetBtnVisible = false

function formReset()  {
    rebuildTable()
    document.getElementById('form-reset').style.display = 'none'
    document.getElementById("search-bar").value = '';
    isNameSorted = !isNameSorted
    sortName()
}


let isGiColored = false


function colorGi() {
    if (!isGiColored) {
            for (let i = 0; i < Object.keys(list).length; i++) {
                let cDiv = document.getElementById('item' + i )
                if (cDiv.dataset.gindex <= 50) {
                    cDiv.classList.add("lowGi")
                } else if (cDiv.dataset.gindex > 50 && cDiv.dataset.gindex <= 70) {
                    cDiv.classList.add("mediumGi") 
                } else cDiv.classList.add("highGi")
            }
            isGiColored = true
            document.getElementById('gi-highlight').classList.add("giHighlightActive")
            document.getElementById('gi-highlight').classList.remove("gi-highlight")
        } else {
            for (let i = 0; i < Object.keys(list).length; i++) {
                let cDiv = document.getElementById('item' + i )
                cDiv.classList.remove("lowGi")
                cDiv.classList.remove("mediumGi")
                cDiv.classList.remove("highGi")                
            }
            isGiColored = false
            document.getElementById('gi-highlight').classList.remove("giHighlightActive")
            document.getElementById('gi-highlight').classList.add("gi-highlight")
        }

        
    }

     //   ????????????????????  //

function sort(parameter) {
    let newArray = []

// ?????????? ???????????? ????????????????????

    let resetArray = ['gindex', 'calo', 'prot', 'fat', 'carb']
    for (let r = 0; r < resetArray.length;){
        let sortReset = resetArray[0]
        document.getElementById(sortReset).setAttribute("onclick","sort('" + sortReset + "')")
        resetArray.shift()   
    }
    
//????????????????????  

    document.getElementById(parameter).setAttribute("onclick","reSort('" + parameter + "')")

    for (let i = 0; i < Object.keys(list).length; i++) {
        newArray.push(list[Object.keys(list)[i]][parameter])    
    }
        newArray.sort(function(a, b) { return a - b } )     
    for (let i = 0; i = newArray.length; i++){
        let importantVar
        importantVar = document.getElementById('product-table-container').querySelectorAll('[data-'+parameter+'="'+ newArray[0] + '"]')
        for (let qry = 0; qry < importantVar.length; qry++){           

            document.getElementById('product-table-container').appendChild(importantVar[qry])             
        }        
        newArray.shift()
    }
}

function reSort(parameter) {

    let newArray = []
    let resetArray = ['gindex', 'calo', 'carb', 'prot', 'fat', 'vita']
    for (let r = 0; r < resetArray.length;){
        let sortReset = resetArray[0]
        document.getElementById(sortReset).setAttribute("onclick","sort('" + sortReset + "')")
        resetArray.shift()   
    }
    document.getElementById(parameter).setAttribute("onclick","sort('" + parameter + "')");


    for (let i = 0; i < Object.keys(list).length; i++) {
        newArray.push(list[Object.keys(list)[i]][parameter])    
    }
        newArray.sort(function(a, b) { return a - b } )
        
    for (let i = 0; i = newArray.length; i++){
        let importantVar = document.getElementById('product-table-container').querySelectorAll('[data-'+parameter+'="'+ newArray[newArray.length - 1] + '"]')
        for (let qry = 0; qry < importantVar.length; qry++){           
  
            document.getElementById('product-table-container').appendChild(importantVar[qry])
          
        }        
        newArray.pop()
    }
}

// ???????????????????? ???? ??????????

let isNameSorted = false
function sortName() {
    
    let newArray = []

    for (let i = 0; i < Object.keys(list).length; i++) {
        newArray.push(list[Object.keys(list)[i]]['name'].toLowerCase())    
    }
    newArray.sort()
    
    
    if (isNameSorted === false) {

            isNameSorted = true
            for (i = 0 ; i = newArray.length ; i ) {   
                let importantVar = document.querySelectorAll('[data-name="'+ newArray[0] + '"]') 
                document.getElementById('product-table-container').appendChild(importantVar[0])
                newArray.shift()
            }  
        } else {
            isNameSorted = false
            for (i = 0 ; i = newArray.length ; i++ ) {   
                let importantVar = document.querySelectorAll('[data-name="'+ newArray[newArray.length - 1] + '"]')
                document.getElementById('product-table-container').appendChild(importantVar[0])
                newArray.pop()
            }  
        }          
        
}

// ????????????-????????????



document.addEventListener("DOMContentLoaded", function(event){
    rebuildTable ()
    document.getElementById("search-bar").focus()


// ?????????? ???? ????????????


    let searchArray = []
    let input = document.getElementById('search-bar')
    input.addEventListener('input', updateValue)

    function updateValue(e) {
        if (e.target.value.length != 0) {
            document.getElementById('form-reset').style.display = 'inline-block'
        }   else {
            document.getElementById('form-reset').style.display = 'none'
        }
        let searchStr = e.target.value.toLowerCase() 
        searchArray = []  
        let qi = [document.querySelectorAll('[data-name]').length]


            let importantVar = document.getElementById('product-table-container').querySelectorAll('[data-name]')
            for (let qry = 0; qry < importantVar.length; qry++){           
                importantVar[qry].style.display = 'none'              
            }   

            for (let i = 0 ; i < qi ; i++ ){
                if ((document.querySelectorAll('[data-name]')[i].dataset.name.includes(searchStr))) {
                    searchArray.push(document.querySelectorAll('[data-name]')[i].id)
                }

                for (let i = 0 ; i< searchArray.length; i++) {
                    document.getElementById(searchArray[i]).style.display = 'grid'
                }   
        }
    } 

    let tButton = document.getElementById('back-to-top')
    window.addEventListener('scroll', function(){

        let y = this.scrollY

        if (y > 300){
            document.getElementById('table-head').classList.add('sticky-head')
            document.getElementById('table-head').classList.remove('sticky-head-hidden')
            tButton.classList.add('btt-show')
        } else {
            document.getElementById('table-head').classList.remove('sticky-head')
            document.getElementById('table-head').classList.add('sticky-head-hidden')
            tButton.classList.remove('btt-show')
        }
    })
    sortName()
})

