form.addEventListener("submit", ()=>{
    const markAttendance = {
        studentID: studentID.value,
        coursecode: coursecode.value,
        date: date.value,
        present: present.value
    }
    fetch("/api/markAttendance",{
        method : "POST",
        body: JSON.stringify(markAttendance),
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