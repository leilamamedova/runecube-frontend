import create from 'zustand';
import { io } from 'socket.io-client';

const useStore = create(set => ({
    socket: io.connect('https://immense-hollows-80938.herokuapp.com/'),
    roles: ' ',
    setRoles: (role) => set((state) => ({ roles: role })),
    username: '',
    setUsername: (name) => set((state) => ({ username: name })),
    runeData: null,
    setRuneData: (rune) => set((state) => ({ runeData: rune })),
}))

export default useStore;     