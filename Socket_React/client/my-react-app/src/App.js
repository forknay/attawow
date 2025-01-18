import './App.css';
import io from 'socket.io-client'
import {useEffect, useState} from 'react'
const socket = io.connect("http://localhost:3001")

function App() {
  //Room States
  const [room, setRoom] = useState("")

  //Message States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room)
    }
  }
}
export default App;

// //selecting from the positions available
//   const sendMessage = () => {
//     socket.emit("send_message", { message, room })
//   };

//   useEffect(()=>{
//     socket.on("received_message", (data) => {
//       setMessageReceived(data.message);
//     })
//   }, [socket])
//   //where all of the front end will be going 
//   return <div className="App">

//     <input placeHolder="Room Number..."
//     onChange={(event) => {
//       setRoom(event.target.value)
//     }}
//     />
//     <button onClick={joinRoom}> Join Room</button>

//     <input placeholder='Message...' onChange ={(event) => {setMessage(event.target.value);}}/>  

//     <button onClick={sendMessage}> Send Message</button>
//     <h1>Message:</h1>
//     {messageReceived}
//   </div>
// }
//socket.io funcitonality
// either listen to an event or emit an event

