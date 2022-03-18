import create from 'zustand';
import { io } from 'socket.io-client';

const useStore = create(set => ({
    socket: io.connect('http://d357-62-212-229-2.ngrok.io'),
    roles: '',
    setRoles: (role) => set((state) => ({ roles: role })),
    username: '',
    setUsername: (name) => set((state) => ({ username: name }))
}))

export default useStore;    