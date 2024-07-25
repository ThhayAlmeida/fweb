fetch("./exer3.json")
    .then(response => response.json())
    .then(materias => {
        for(const materia in materias) {

            let newIngles = document.createElement("p");
            newIngles.innerHTML = materias[materia].join(', ');
            document.querySelector('h1').appendChild(newIngles);
        }}
    )   