import { useState } from 'react';
import './TaskList.css';

function TaskList({ tasks, deleteTask, toggleTask, editTask }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
  };

  const saveEdit = (id) => {
    if (editTitle.trim() === '') {
      return;
    }

    editTask(id, editTitle.trim());

    setEditingId(null);
    setEditTitle('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          className={`task-item ${task.completed ? 'completed' : ''}`}
          key={task.id}
        >
          {editingId === task.id ? (
            <div className="edit-form">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />

              <button
                className="save-btn"
                onClick={() => saveEdit(task.id)}
              >
                Save
              </button>

              <button
                className="cancel-btn"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <div
                className="task-title"
                onClick={() => toggleTask(task.id)}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />

                <span>{task.title}</span>
              </div>

              <div className="task-actions">
                <button
                  className="edit-btn"
                  onClick={() => startEditing(task)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;