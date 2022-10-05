window.onload = () => {
    let rec = JSON.parse(localStorage.getItem("receita"))
    let spanTittle = document.getElementById("spanTittle")
    let spanBody = document.getElementById("spanBody")
    
    spanTittle.innerHTML = rec.Titulo
    spanBody.innerHTML = rec.Corpo
    
}
