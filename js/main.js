const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
    boton.addEventListener("click", () =>{
        const botonapretado = boton.textContent;

            //boton C
            if (boton.id ==="c"){
                pantalla.textContent = "0";
                return;
            }
            //boton borrar
            if (boton.id === "borrar"){
                if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                    pantalla.textContent = "0";
                } else{
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                    
                }
                return;
            }
            //boton igual
            if (boton.id === "igual"){
                try {
                    pantalla.textContent = eval(pantalla.textContent);
                } catch {
                    pantalla.textContent = "Error!";
                }
                return;
            }

            if (pantalla.textContent === "0" || pantalla.textContent === "Error!"){
                pantalla.textContent = botonapretado
            } else{
                pantalla.textContent += botonapretado;
            }
        
    })
})