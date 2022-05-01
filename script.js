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
        let vita = list[Object.keys(list)[i]].vita

        document.getElementById('item' + id).dataset.name = name.toLowerCase()
        document.getElementById('item' + id).dataset.gindex = gindex
        document.getElementById('item' + id).dataset.calo = calo
        document.getElementById('item' + id).dataset.carb = carb
        document.getElementById('item' + id).dataset.prot = prot
        document.getElementById('item' + id).dataset.fat = fat
        document.getElementById('item' + id).dataset.vita = vita

        let productProperties = [name, gindex, calo, carb, prot, fat, vita]

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



function sort(parameter) {
    let newArray = []

// сброс кнопок сортировки

    let resetArray = ['gindex', 'calo', 'carb', 'prot', 'fat', 'vita']
    for (let r = 0; r < resetArray.length;){
        let sortReset = resetArray[0]
        document.getElementById(sortReset).setAttribute("onclick","sort('" + sortReset + "')")
        resetArray.shift()   
    }
    
//сортировка  

    document.getElementById(parameter).setAttribute("onclick","reSort('" + parameter + "')")
    for (let i = 0; i < Object.keys(list).length; i++) {
        newArray.push(list[Object.keys(list)[i]][parameter])    
    }
        newArray.sort(function(a, b) { return a - b } )
       
    for (let i = 0; i = newArray.length; i++){
        let importantVar
        importantVar = document.getElementById('product-table-container').querySelectorAll('[data-'+parameter+'="'+ newArray[0] + '"]')
        for (let qry = 0; qry < importantVar.length; qry++){           
            importantVar[qry].style.display = 'none'
            document.getElementById('product-table-container').appendChild(importantVar[qry])
            importantVar[qry].style.display = 'grid'

             
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
            importantVar[qry].style.display = 'none'    
            document.getElementById('product-table-container').appendChild(importantVar[qry])
            importantVar[qry].style.display = 'grid'            
        }        
        newArray.pop()
    }
}

document.addEventListener("DOMContentLoaded", function(event){

rebuildTable ()

// поиск по тексту

let searchArray = []
let input = document.getElementById('search-bar')
input.addEventListener('input', updateValue)

function updateValue(e) {
    let searchStr = e.target.value.toLowerCase() 
    searchArray = []  
    let qi = [document.querySelectorAll('[data-name]').length]


        let importantVar = document.getElementById('product-table-container').querySelectorAll('[data-name]')
        for (let qry = 0; qry < importantVar.length; qry++){           
            importantVar[qry].style.display = 'none'              
        }   

        for (let i = 0 ; i < qi ; i++ ){
            if ( (document.querySelectorAll('[data-name]')[i].dataset.name.includes(searchStr))) {
                searchArray.push(document.querySelectorAll('[data-name]')[i].id)
            }

            for (let i = 0 ; i< searchArray.length; i++) {
                document.getElementById(searchArray[i]).style.display = 'grid'
            }
                    
    
    
        
    }
    // for(let i = 0; i < searchArray ; i++) {
        // document.querySelectorAll('[data-name]')[i].dataset.name
    // }
    // for (let i = 0; i < searchArray.length ; i++){
    //     console.log(searchArray)
// }





}      
    


});

