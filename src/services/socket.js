import create from 'zustand';
import { io } from 'socket.io-client';

const useStore = create(set => ({
    socket: io.connect('http://6c92-94-20-209-206.ngrok.io'),
    roles: ' ',
    setRoles: (role) => set((state) => ({ roles: role })),
    username: '',
    setUsername: (name) => set((state) => ({ username: name }))
}))

export default useStore;    