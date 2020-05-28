import React, { useState, useEffect } from 'react';

function TaskForm(props) {

    const initFormState = { id: null, name: '', status: true }
    const [task, setTask] = useState(initFormState)

    useEffect(() => {
        if (props.Editting === true) {
            setTask(props.CurrentTask)
        } else {
            setTask(initFormState)
        }
        console.log('dddd')
    }, [props.Editting, props.CurrentTask])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setTask({ ...task, [name]: value })

    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (!task.name) return
        props.addTask(task)
    }
    const onUpdateTask = (event) => {
        event.preventDefault()
        if (!task.name) return
        // console.log('ben form: ')
        // console.log(task)
        props.updateTask(task)
    }
    const onClear = () => {
        if (props.Editting === false) {
            setTask(initFormState)
        }
        else {
            setTask(props.CurrentTask)
        }

    }

    function showData() {
        // console.log(task)
    }
    const hideForm = () => {
        setTask(initFormState)
        // setCount(count => count + 1)
        props.hideForm()

        // if(props.Editting===true){}

    }


    return (
        <div>
            <div className="row" >
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <center>
                                {props.Editting === false ? 'Thêm công việc' : 'Cập nhật công việc'}
                                &nbsp;
                               <button
                                    className="btn btn-xs btn-info"
                                    onClick={hideForm}
                                >X</button>
                            </center>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form action="" method="POST" onSubmit={props.Editting === true ? onUpdateTask : onSubmit}>
                            <div className="form-group">
                                <label>Tên</label>
                                <input
                                    // value={props.Editting === false ? task.name : props.CurrentTask.name}
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    required="required"
                                    value={task.name}
                                    onChange={handleInputChange}
                                />
                                <label>Trạng thái</label>
                                <select
                                    name="status"
                                    id="input"
                                    className="form-control"
                                    required="required"
                                    value={task.status}

                                    // value={props.Editting === false ? task.status : props.CurrentTask.status}

                                    onChange={handleInputChange}
                                >
                                    <option value={true}>Kích hoạt</option>
                                    <option value={false}>Hủy</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">{props.Editting === false ? 'Thêm công việc' : 'Cập nhật công việc'}</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={onClear}>Clear</button>
                            <button type="button" className="btn btn-danger" onClick={showData}>Show</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;
