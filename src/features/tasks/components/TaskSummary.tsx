import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import {
    completedTasksSelector,
    uncompletedTasksSelector,
} from '../TaskSelector'
import type { Task, CSSProperties } from '../../../types'

const TaskSummary = (): JSX.Element => {
    const completedTasks =
        useRecoilValue<Task[]>(completedTasksSelector)
    const uncompletedTasks =
        useRecoilValue<Task[]>(uncompletedTasksSelector)
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Summary of Your Tasks</h1>
            <div style={styles.list}>
                <span className="material-icons">check_circle</span>
                <h2>
                    You Have completed {completedTasks.length}{' '}
                    {completedTasks.length <= 1? 'task' : 'tasks'}
                </h2>
            </div>
            <div style={styles.list}>
                <span className="material-icons">list</span>
                <h2>
                    You Still have {uncompletedTasks.length}{' '}
                    {uncompletedTasks.length <=1 ? 'task' : 'tasks'} left
                </h2>
            </div>
            <div style={styles.links}>
                <Link to="/task-list" style={styles.link}>
                    See Your Task List
                </Link>
                <Link to="/task-progress" style={styles.link}>
                    Manage Your Task Progress
                </Link>
            </div>
        </div>
    )
}

const styles: CSSProperties = {
    container: {
        padding: '40px',
    },
    heading: {
        color: '#55c89F',
        marginBottom: '60px',
    },
    list: {
        color: '#fff',
        backgroundColor: '#55C89F',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
    width: '120%',
    },
    links: {
        display: 'flex',
    },
    link:{
        padding: '16px',
        marginRight: '24px',
        backgroundColor: '#55ACC8',
        color: '#fff',
        borderRadius: '8px',
        textDecoration:'none',
    },
}

export default TaskSummary