// const form = document.querySelector("form"),
//         nextBtn = form.querySelector(".nextBtn"),
//         backBtn = form.querySelector(".backBtn"),
//         allInput = form.querySelectorAll(".first input");
        


// nextBtn.addEventListener("click", ()=> {
//     allInput.forEach(input => {
//         if(input.value != ""){
//             form.classList.add('secActive');
//         }else{
//             form.classList.remove('secActive');
//         }
//     })
// })

// backBtn.addEventListener("click", () => form.classList.remove('secActive'));


const form = document.querySelector("form"),
      nextBtn = form.querySelector(".nextBtn"),
      backBtn = form.querySelector(".backBtn"),
      allInput = form.querySelectorAll(".first input"),
      btnText = form.querySelector(".btnText");

nextBtn.addEventListener("click", () => {
  allInput.forEach(input => {
    if(input.value!= ""){
      form.classList.add('secActive');
    }else{
      form.classList.remove('secActive');
    }
  })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));

btnText.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the form from submitting normally
  let isAllInputFilled = true;
  allInput.forEach(input => {
    if(input.value == ""){
      isAllInputFilled = false;
    }
  });
  if(isAllInputFilled){
    alert("Registration successful!")
    // Create a div to display the message
    // const messageDiv = document.createElement("div");
    // messageDiv.textContent = "Registration successful!";
    // messageDiv.classList.add('success-message'); // Add a class to style the message
    // form.appendChild(messageDiv);
  }
});