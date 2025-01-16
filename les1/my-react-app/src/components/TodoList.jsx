import { observer } from 'mobx-react'
import { useState } from 'react'
import todoStore from '../store/TodoStore';

const TodoList = observer(() => {

    const [title, setTitle] = useState('');

    const handleAddTask = () => {
        if (title.trim()){
            todoStore.addTask(title);
            setTitle('');
        }
    };

    return (
        <div>
            <div style={EnterStyle}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task"
                    style={inputStyle}
                    />
                <button onClick={handleAddTask}>Add task</button>
            </div>
            <ul>
                {todoStore.tasks.map(task =>(
                    <li key={task.id}>
                        <div style={TaskStyle}>
                            <span
                                style={{ textDecoration: task.completed ? 'line-through' : 'none'}}
                                onClick={() => todoStore.toggleTask(task.id)}
                            >
                                {task.title}
                            </span>
                            <button onClick={() => todoStore.removeTask(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
})

const inputStyle = {
    padding: '10px',
    border: '1px solid black',
    borderRadius: '10px',
};

const EnterStyle = {
   display: 'flex',
   flexDirection: 'row',
   gap: '5%'
};

const TaskStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '5%'
 };

export default TodoList