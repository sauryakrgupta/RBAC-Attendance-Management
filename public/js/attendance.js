form.addEventListener("submit", ()=>{
    const attendance = {
        coursecode: coursecode.value
    }
    fetch("/api/attendance",{
        method : "POST",
        body: JSON.stringify(attendance),
        headers:{
            "Content-Type": "application/json"
        }
    }).then(res=> res.json())
    .then(data=>{
        if(data.status == "error"){
            success.style.display= "none"
            error.style.display= "block"
            error.innerText = data.error
        }else{
            success.style.display= "block"
            error.style.display= "none"
            success.innerText = data.success
        }
    })
})