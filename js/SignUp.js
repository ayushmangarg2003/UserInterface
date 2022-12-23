// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBYPPi9yRPkxH-5sKeRuPL5LFf-ki8L34g",
  authDomain: "doctorsignup-96cf3.firebaseapp.com",
  projectId: "doctorsignup-96cf3",
  storageBucket: "doctorsignup-96cf3.appspot.com",
  messagingSenderId: "437941067801",
  appId: "1:437941067801:web:b9067990420e340dffca88"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()

function register () {
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  full_name = document.getElementById('full_name').value
  Age = document.getElementById('Age').value
  Location = document.getElementById('Location').value

  if (validate_email(email) == false) {
    alert('Check Email')
    return
  }
  if (validate_password(password) == false) {
    alert('Check Password')
    return
  }
  if (validate_field(full_name) == false || validate_field(Age) == false || validate_field(Location) == false) {
    alert('One or More Extra Fields incorrect')
    return
  }
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    var user = auth.currentUser
    var database_ref = database.ref()
    var user_data = {
      email : email,
      full_name : full_name,
      Age : Age,
      Location : Location,
      last_login : Date.now()
    }
    database_ref.child('users/' + user.uid).set(user_data)
    alert('User Created!!')
  })
  .catch(function(error) {
    var error_code = error.code
    var error_message = error.message
    alert(error_message)
  })
}
function login () {
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  if (validate_email(email) == false) {
    alert('Email entered is incorrect')
    return
  }
  if (validate_password(password) == false) {
    alert('Password is incorrect!!')
    return
  }
  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    var user = auth.currentUser
    var database_ref = database.ref()
    var user_data = {
      last_login : Date.now()
    }
    database_ref.child('users/' + user.uid).update(user_data)
    alert('User Logged In!!')
  })
  .catch(function(error) {
    var error_code = error.code
    var error_message = error.message
    alert(error_message)
  })
}

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    return true
  } else {
    return false
  }
}
function validate_password(password) {
  if (password < 6) {
    return false
  } else {
    return true
  }
}
function validate_field(field) {
  if (field == null) {
    return false
  }
  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}
