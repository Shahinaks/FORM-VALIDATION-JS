const validate=()=>{
    let isValid=true
    const name=document.getElementById("Name").value.trim()
    const email=document.getElementById("Email").value.trim()
    const phone=document.getElementById("Phone").value.trim()
    const age=document.getElementById("Age").value.trim()
    const gender = document.querySelector('input[name="Gender"]:checked');
    const address=document.getElementById("Address").value.trim()


    if(name.length<3 || name.length>50){
        document.getElementById("nameError").innerText="Name must be between 3 and 50 characters";
        document.getElementById("Name").classList.add("is-invalid");
        isValid=false
    }
    if(!email){
        document.getElementById("emailError").innerText="Enter a valid Email";
        document.getElementById("Email").classList.add("is-invalid");
        isValid=false
    }
    const phoneRegex = /^\d{10,14}$/;
    if(!phoneRegex.test(phone)){
        document.getElementById("phoneError").innerText="Phone must be between 10 and 14 digits";
        document.getElementById("Phone").classList.add("is-invalid");
        isValid=false
    }
    if(age === "" || age < 12 || age > 100) {
        document.getElementById("ageError").innerText="Age must be between 12 and 100";
        document.getElementById("Age").classList.add("is-invalid");
        isValid=false
    }
    if(!gender){
        document.getElementById("genderError").innerText="please select your gender";
        isValid=false
    }
    if(address.length>50){
        document.getElementById("addressError").innerText="Address must not exceed 50 characters";
        document.getElementById("Address").classList.add("is-invalid");
        isValid=false
    }

    return isValid
}

document.getElementById("registrationForm").addEventListener("submit",(Event)=>{
    if(!validate()){
        Event.preventDefault();
    }
})

