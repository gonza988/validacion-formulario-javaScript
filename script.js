


const firebaseConfig = {
    apiKey: "AIzaSyDPS6FZTv9_FSqUzmZQehtOoRQEgII6vZM",
    authDomain: "datos-de-formulario-bcc66.firebaseapp.com",
    projectId: "datos-de-formulario-bcc66",
    storageBucket: "datos-de-formulario-bcc66.appspot.com",
    messagingSenderId: "77489159814",
    appId: "1:77489159814:web:7698a9ef5ec2051bdadb07",
    measurementId: "G-R7P2R91955"
  };
  
  // Initialize Firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.getElementById('formulario').addEventListener('submit',(event)=>{
event.preventDefault()
//validar campo nombre
let entradaNombre=document.getElementById('name')
let errorNombre=document.getElementById('nameError')

if(entradaNombre.value.trim()===''){
    errorNombre.textContent='Por favor, introduci tu nombre'
errorNombre.classList.add('error-message')
}else{
    errorNombre.textContent=''
    errorNombre.classList.remove('error-message')
}
//validar email
let emailEntrada=document.getElementById('email')
let emailError=document.getElementById('emailError')
let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;//patron de validacion basico 
if(!emailPattern.test(emailEntrada.value)){
    emailError.textContent='Por favor, introduci un mail valido'
emailError.classList.add('error-message')
}
//validar contraseña
let contraseñaEntrada=document.getElementById('password')
let contraseñaError=document.getElementById  ('passwordError')
let contraseñaPattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

if(!contraseñaPattern.test(contraseñaEntrada.value)){
    contraseñaError.textContent='contraseña debe tenr al menos 8 caracteres, numero ,mayusclas , caracteres'
    contraseñaError.classList.add('error-message')
    }
    else{
        contraseñaError.textContent=''
        contraseñaError.classList.remove('error-message')
    }
    if(!errorNombre.textContent && !emailError.textContent && !contraseñaError.textContent){
       //BACKEND QUE RECIBI INFORMACION
        db.collection("users").add({
            first: entradaNombre.value,
            email: emailEntrada.value,
            password: contraseñaEntrada.value
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        }); 
 
        alert('el formulario se ha enviado exitosamente')
 document.getElementById('formulario').reset();
    }

})

