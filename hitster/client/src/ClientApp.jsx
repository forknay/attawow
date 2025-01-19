import io from 'socket.io-client';
import React from "react"

const socket = io("http://localhost:3001")

console.log('running...')

socket.emit("hello-message", ("hellooooo"));

// io.on("connection", socket => {
//   console.log(socket.id)
//   socket.on("send-message"), message => {
//     io.emit("receive-message", message)
//   }
// })



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

