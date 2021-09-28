import { IRouteProps } from "umi";
import { io } from 'socket.io-client';
import env from '~/env_variable';
import { useEffect } from "react";
import { history } from 'umi';


function chatPage(props: IRouteProps) {
  
  useEffect(() => {
    const socket = io(env.ORIGIN, {
      path: env.BASE_SOCKET + '/chat'
    });
    
    socket.on('disconnect', () => {
      console.log('server disconnect');
    })

    history.listen((location) => {
      if (location.pathname !== '/chat') {
        socket.close();
      }
    })

  })
  
  return (
    <div>
      聊天室

    </div>
  );
}

export default chatPage;