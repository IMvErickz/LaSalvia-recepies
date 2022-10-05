const button = document.getElementById("button")
    .addEventListener("click", () => {
        const recepie = {
            Titulo: document.getElementById("receTittle").value,
            Corpo: document.getElementById("bodyRecepie").value
        }
        
        let local = localStorage.setItem("receita", JSON.stringify(recepie))
            swal("Receita salva com sucesso", "Aproveite para salvar mais uma!", "success");

            
        
})