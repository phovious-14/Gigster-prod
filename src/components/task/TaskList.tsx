import React, { useState } from 'react';
import Task from './Task';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Learn Next.js', completed: false },
        { id: 2, text: 'Build a Task UI', completed: false },
    ]);

    const toggleComplete = (taskId: any) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const addTask = (taskText: any) => {
        setTasks([...tasks, { id: tasks.length + 1, text: taskText, completed: false }]);
    };

    const removeTask = (taskId: any) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="mx-auto mt-4 w-[60%]">
            <AddTaskForm addTask={addTask} />
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    removeTask={removeTask}
                />
            ))}
        </div>
    );
};

const AddTaskForm = ({ addTask }: any) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (taskText) {
            addTask(taskText);
            setTaskText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="my-4 flex">
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="New task"
                className="flex-grow border border-gray-300 rounded-l px-3 py-2 outline-none bg-[#ffffff50]"
            />
            <button
                type="submit"
                className="bg-[#00000050] text-white px-4 py-2 rounded-r "
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 256 256"><g fill="none" stroke="#00e62e" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><circle cx="128" cy="128" r="112"/><path d="M 79.999992,128 H 176.0001"/><path d="m 128.00004,79.99995 v 96.0001"/></g></svg>
            </button>
        </form>
    );
};

export default TaskList;
