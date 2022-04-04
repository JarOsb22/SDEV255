// Your solution goes here 

password = prompt("enter password: ")

function isStrongPassword(password){
  isStrong = false;
  if (password.length >= 8 && password.indexOf(password == -1)){
    for (let i = 0; i < password.length; i++) {
      charCode = password.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90){
        isStrong = true
      }
    }
  }
  return isStrong
  }

isStrong = isStrongPassword(password);
if (isStrong){
  console.log(password + " is strong");
}
else{
  console.log(password + " is not strong");
}