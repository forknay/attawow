import io from 'socket.io-client';

const [socket, setSocket] = useState(null);

useEffect(() => {
  const socketInstance = io('http://localhost:5000');
  setSocket(socketInstance);

  // listen for events emitted by the server

  socketInstance.on('connect', () => {
    console.log('Connected to server');
  });

  socketInstance.on('message', (data) => {
    console.log(`Received message: ${data}`);
  });

  return () => {
    if (socketInstance) {
      socketInstance.disconnect();
    }
  };
}, []);