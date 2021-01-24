
// funcion que me verifica si una palabra es palindromo o no
function isPalindrom(){
    let check, output
    var word = prompt("ingrese la palabra o frase: ")
    let index =String(word).toLocaleLowerCase();
    var str =[...index].filter(value=>Number(value)!=0);
    let reversedString =[...index].reverse().filter(value=>Number(value)!=0);
    reversedString.forEach((element1,i)=>{
        if(Number(element1)==element1)
        {throw "hay valores numericos en la cadena de caractéres"}
        check = (element1 ===str[i])? true : false;
    }); output = check? alert(`la palabra *${word}* es un Palídromo`):alert(`la palabra *${word}* no es un Palídromo`)
    return output;
}

// Diferencia entre flexbox y grid
    
  // el grid es bidimiensional y el flexbox un elemento unidimiensional 

// ejercicio HTML

// creacion de un div.
    var div = document.createElement('div')
// creacion de un svg   
    let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg')
// agregar una clase al div
    div.classList.add("clasediv")
// agregar un estilo que cambie la propiedad color
    div.style.setProperty("color","blue")
    div.setAttribute("id","divId")
// agregar div al body del documento html
    document.body.appendChild(div)
// agregar texto al div
    let text = document.createTextNode("Hello World")
    div.appendChild(text)
// crear hijo antes del div con texto.
    var div2 = document.createElement('div')
    document.body.insertBefore(div2,div)
// buscar los nodos del primer Div
    let childs = div.children;
// dime los elementos que tiene el primer div
    let elements = div.ELEMENT_NODE;
// buscar todos los div de la pagina
    let allDivs = document.body.querySelectorAll("div")
// buscar los div que contiene la clase agregada "clasediv"
    let classDiv = document.body.querySelectorAll("clasediv")
// buscar los divs con el id agregado en el punto 5
    let seekdivsId = document.body.querySelectorAll("divId")


