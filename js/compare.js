
//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, 
        motor, potencia, volumeCacamba, roda, image){
       this._nome = nome;
       this._preco = preco;
       this._alturaCacamba = alturaCacamba;
       this._alturaVeiculo = alturaVeiculo;
       this._alturaSolo = alturaSolo;
       this._capacidadeCarga = capacidadeCarga;
       this._motor = motor;
       this._potencia = potencia;
       this._volumeCacamba = volumeCacamba;
       this._roda = roda;
       this._image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i]._nome  === carClass._nome) {
            return i;
        }
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){   
        if(el.checked){
            if(carArr.length < 2) {
                carArr.push(carClass);
            }
            else {
                el.checked = false;
            }
        } else {
            var index = GetCarArrPosition(carArr, carClass);
            if (index > -1) {
               carArr.splice(index, 1);
            }
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    MontarImagem();
    MontarDados();
}

function MontarImagem() {
    var td0 = document.querySelector("#compare_image_0");
    var td1 = document.querySelector("#compare_image_1");

    td0.innerHTML = "";
    td1.innerHTML = "";

    var img0 = document.createElement("img");
    img0.setAttribute("src", carArr[0]._image);

    var img1 = document.createElement("img");
    img1.setAttribute("src", carArr[1]._image);

    td0.appendChild(img0);
    td1.appendChild(img1);
}

function MontarDados() {
    var trs = document.querySelectorAll("#tb-compare tbody tr");

    trs.forEach(tr => {
        var i = 0;
        tr.querySelectorAll("td").forEach(td => {
            if (td.getAttribute("id") != null) {
                switch (td.getAttribute("id")) {
                    case "compare_modelo_"+i:
                        td.textContent = carArr[i]._nome;
                        break;
                    case "compare_alturacacamba_"+i:
                        td.textContent = carArr[i]._alturaCacamba;
                        break;
                    case "compare_alturaveiculo_"+i:
                        td.textContent = carArr[i]._alturaVeiculo
                        break;
                    case "compare_alturasolo_"+i: 
                        td.textContent = carArr[i]._alturaSolo;
                        break;
                    case "compare_capacidadecarga_"+i: 
                        td.textContent = carArr[i]._capacidadeCarga;
                        break;
                    case "compare_motor_"+i: 
                        td.textContent = carArr[i]._motor;
                        break;
                    case "compare_potencia_"+i: 
                        td.textContent = carArr[i]._potencia;
                        break;
                    case "compare_volumecacamba_"+i: 
                        td.textContent = carArr[i]._volumeCacamba;
                        break;
                    case "compare_roda_"+i: 
                        td.textContent = carArr[i]._roda;
                        break;
                    case "compare_preco_"+i: 
                        td.textContent = carArr[i]._preco;
                        break;
                }

                i++;
            }
        })
    })
}
