'use client';

import { useEffect, useRef } from 'react';

export default function SocketPage() {
  const { current: socket } = useRef();
  // new WebSocket(
  //   'wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self',
  // ),

  useEffect(() => {
    const socket = new WebSocket(
      'wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self',
    );

    socket.addEventListener('message', (e) => {
      console.log(e);
    });
    return () => {
      socket.close();
    };
  }, []);

  return <main>11</main>;
}
