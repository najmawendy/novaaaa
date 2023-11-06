const form = document.querySelector("form")
const resp = document.querySelector("h4")



form.addEventListener("submit" , (e)=>{
    e.preventDefault()

    const pessoas = Number(form.inNumero.value)
    const peixe = Number(form.inPeixe.value)
    let resultado
        if (peixe > pessoas) {
            resultado = (pessoas * 20) + ((peixe - pessoas) * 12)
            }  else {
            resultado = pessoas * 20
            }

            resp.innerText = `Nº de pessoas: ${pessoas}\n 
                             Nº de peixes: ${peixe}\n 
                             Pagar: R$ ${resultado.toFixed(2)}`
})                        
            
        
