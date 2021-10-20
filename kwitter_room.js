const firebaseConfig = {
    apiKey: "AIzaSyC6uCl4mSELiCx9sY-uM4cM1F6BqD300fo",
    authDomain: "kwitter-854a6.firebaseapp.com",
    databaseURL: "https://kwitter-854a6-default-rtdb.firebaseio.com",
    projectId: "kwitter-854a6",
    storageBucket: "kwitter-854a6.appspot.com",
    messagingSenderId: "944066363400",
    appId: "1:944066363400:web:513ec342e8b49ea68511bd"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row = "<div class = 'room_name' id = " + Room_names + "onclick = 'rediresctToRoomName(this.id)' > # " + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
  });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";

}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}