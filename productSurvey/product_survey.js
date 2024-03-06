function submitFeedback(){

}

const username = document.getElementById("name").value;
const age = document.getElementById("age").value;
const email = document.getElementById("email").value;
const job = document.getElementById("job").value;
const designation = document.getElementById("designation").value;
const productType = document.getElementById("productType").value;
const feedback = document.getElementById("feedbackText").value;

const submitButton=document.getElementById('submitBtn');

submitButton.onclick = submitFeedback;

alert("Thank you for your valuable feedback");

/*As the submitFeedback function will fetch the user feedback information in the second point of step 2, the details should also be displayed on the web page to inform the user about the information entered.*/

document.getElementById('userName').innerHTML = username;
document.getElementById('userAge').innerHTML = age;
document.getElementById('userEmail').innerHTML = email;
document.getElementById('userJob').innerHTML = job;
document.getElementById('userDesignation').innerHTML = designation;
document.getElementById('userProductChoice').innerHTML = productType;
document.getElementById('userFeedback').innerHTML = feedback;

document.getElementById('userInfo').style.display = 'block';//To make this part visible after the button click


//if the user presses the 'Enter' key, the feedback form should submit, similar to clicking the submit button:

document.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        submitFeedback();
    }
});