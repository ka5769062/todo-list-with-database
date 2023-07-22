
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDCHNPys3Hd00GiaOluh0lc0XPIWGm-R2o",
    authDomain: "todo-list-database-f592e.firebaseapp.com",
    projectId: "todo-list-database-f592e",
    storageBucket: "todo-list-database-f592e.appspot.com",
    messagingSenderId: "278277078067",
    appId: "1:278277078067:web:5abb8dd8ead4080d1bf746",
    measurementId: "G-91NEMR1DGS"
  };

  const app = initializeApp(firebaseConfig);

  // CHECKING CONNECTION WITH DB
  const database = getDatabase() 
  console.log(database)










let userArr = [];


userArr = JSON.parse(localStorage.getItem('user'))

let butn = document.getElementById("butn")

butn.addEventListener("click", function () {

  var enterData = document.getElementById('todo').value

  //  var key = db.ref('todos').push().key

  // console.log(enterData)

  if (enterData == '') {

    alert("Input field cannot be blank")

  }

  else {

    let show = document.getElementById('show')
    let li = document.createElement('li')
    show.appendChild(li)
    li.textContent = enterData

    let a = document.createElement('a');
    a.innerHTML = "\u00d7";
    a.href = "javascript:void(0)"
    a.className = "remove"
    li.appendChild(a)

    //    localStorage

    // userArr.push({ 'name': enterData })
    localStorage.setItem("user", JSON.stringify(userArr))

  }

  document.getElementById('todo').value = ""

  let btn = document.querySelector('ul');
  btn.addEventListener('click', function (e) {
    let show = document.getElementById('show')
    let li = e.target.parentElement
    show.removeChild(li)
  }
  )

  savingData(enterData)
})

const savingData = (enterData) =>{


  set(ref(database,'ToDos ' +  enterData),{

    newTodo: enterData,

  });



}