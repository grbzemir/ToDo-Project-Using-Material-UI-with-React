import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function CreateTask(props) {
    const [task, setTask] = useState({
        title: '',
        content: '', // Ensure this matches the 'name' attribute in the textarea
    });

    function detectChange(event) {
        const { name, value } = event.target;

        setTask((prevTask) => {
            return { ...prevTask, [name]: value };
        });
    }

    function submitTask(event) {
        props.onAdd(task);
        setTask({
            title: '',
            content: ''
        });
        event.preventDefault();
    }

    return (
        <div className='todoDivArea'>
            <form className='todoDiv'>
                <input
                    type="text"
                    className="form-control todoText mb-3"
                    name="title"
                    value={task.title}
                    onChange={detectChange}
                    placeholder="Pozisyonunuzu Giriniz"
                />
                <textarea
                    name="content" // Ensure this matches the 'content' property in the state
                    className="form-control todoText mb-3"
                    rows={3}
                    value={task.content}
                    onChange={detectChange}
                    placeholder='Mesleğinizi Giriniz'
                ></textarea>
                <button className="btn btn-primary todoButton" onClick={submitTask}>Ekle</button>
            </form>
        </div>
    );
}

CreateTask.propTypes = {
    onAdd: PropTypes.func.isRequired
};
