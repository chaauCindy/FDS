// var doc = document;
// var user_name, user_email, user_gender, user_age;

// doc.getElementById("btn-validator").addEventListener('click',function (){
//     user_name = doc.getElementById("user_name").value,
//     user_email = doc.getElementById("user_email").value,
//     user_gender = doc.getElementById("user_gender").value,
//     user_age = doc.getElementById("user_age").value;

//     console.log('이름: ', user_name);
//     console.log('이메일: ', user_email);
//     console.log('성별: ', user_gender);
//     console.log('나이: ', user_age);  
// });


document.getElementById("btn-validator").addEventListener('click',function (){
    console.log('이름: ', user_info.user_name.value);
    console.log('이메일: ', user_info.user_email.value);
    console.log('성별: ', user_info.elements['user_gender'].value);
    console.log('나이: ', user_info.user_age.value);  
});