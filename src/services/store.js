import create from 'zustand';
import { io } from 'socket.io-client';

const useStore = create(set => ({
    socket: io.connect('https://shielded-everglades-33939.herokuapp.com'),
    roles: ' ',
    setRoles: (role) => set((state) => ({ roles: role })),
    username: '',
    setUsername: (name) => set((state) => ({ username: name })),
    runeData: null,
    setRuneData: (rune) => set((state) => ({ runeData: rune })),
    startStory: null,
    setStartStory: (start) => set((state) => ({ startStory: start })),
    endStory: null,
    setEndStory: (end) => set((state) => ({ endStory: end })),
    gameData: null,
    setGameData: (data) => set((state) => ({ gameData: data })),
    mazeSide: null,
    setMazeSide: (side) => set((state) => ({ mazeSide: side })),
    runeCount: null,
    setRuneCount: (count) => set((state) => ({ runeCount: count })),
    newRune: [],
    setNewRune: (newData) => set((state) => ({ newRune: newData })),
}))

export default useStore;     