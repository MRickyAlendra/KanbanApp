import { atom } from 'recoil'
import type { Task } from '../../types'

export const tasksState = atom<Task[]> ({
    key: 'task',
    default: [
    {
        id: 1,
        title: 'Develop Final Project',
        detail: 'SPA Kanban project using Recoil and TypeScript',
        dueDate: '2023-04-25',
        progressOrder: 1,
    },
    {
        id: 2,
        title: 'Lunch with Guru Domba',
        detail: 'Have Nasi Padang with guru Domba',
        dueDate: '2023-04-10',
        progressOrder: 1,
    },
    {
        id: 3,
        title: 'Learn TypeScript',
        detail: 'Complete TypeScript material on Progate',
        dueDate: '2023-04-25',
        progressOrder: 2,
    },
    {
        id: 4,
        title: 'Decide Plans for Lebaran holidays',
        detail: 'Trip with family?',
        dueDate: '2023-04-21',
        progressOrder: 2,
    },
    {
        id: 5,
        title: 'Develop a React Project',
        detail: "Develop a Todo management app and ask Guru Domba's review",
        dueDate: '2023-05-02',
        progressOrder: 3,
    },
    {
        id: 6,
        title: 'Learn JavaScript Basics',
        detail: 'Complete JavaScript materials on Frontend Course',
        dueDate: '2023-03-10',
        progressOrder: 4,
    },
    ], 
})