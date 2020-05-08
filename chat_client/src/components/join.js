import React,{useState,useEffect} from 'react'
import io from 'socket.io-client';

export function Join (props) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  useEffect(() => {
    const socket = io('http://localhost:5000');

    socket.emit('mes',(mes) => {
      console.log(mes);
     
    })

    socket.on('news', (data) => {
      console.log(data);
      
    });
    socket.on('newuser',(data) => {
      console.log(data);
    })
    

    // socket.emit('Sendmes', mess);

  },[])
  return (
    <div>
      <h1>Join</h1>
    </div>
  )
}
export default Join;
