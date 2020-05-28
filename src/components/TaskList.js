import React, { useState } from 'react';
import TaskItem from './TaskItem'

function TaskList(props) {
    const [filter, setfilter] = useState({ name: '', sort: '-1' })
    // const [filterName, setfilterName] = useState('')
    // const [filterStatus, setfilterStatus] = useState(-1)
    const showList = () => {
        let keyt = filter.name.toLowerCase()
        if (props.keywords !== '') {
            keyt = props.keywords.toLowerCase()
        }
        let list = props.tasks.filter(task => (task.name.toLowerCase()).indexOf(keyt) !== -1)
        if (filter.sort === '1' || filter.sort === 1) {
            list = props.tasks.filter(task => (task.status === 'true' || task.status === true)
                && (task.name.toLowerCase()).indexOf(keyt) !== -1)
        }
        if (filter.sort === '0' || filter.sort === 0) {
            list = props.tasks.filter(task => (task.status === 'false' || task.status === false)
                && (task.name.toLowerCase()).indexOf(keyt) !== -1)
        }
        return list
    }
    // var showTest = props.tasks.filter(task => task.status === 'true' || task.status === true)
    var eleTask = showList().map((task, index) => {
        return <TaskItem
            key={index}
            stt={index + 1}
            id={task.id}
            name={task.name}
            status={task.status}
            updateStatus={props.updateStatus}
            deleteTask={props.deleteTask}
            showFormEdit={props.showFormEdit}
        />

    })

    const handlerEvent = (event) => {
        const { name, value } = event.target
        setfilter({ ...filter, [name]: value })
    }

    return (
        <div>

            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                onChange={handlerEvent}
                                type="text"
                                name="name"
                                id="input"
                                className="form-control" />
                        </td>
                        <td>

                            <select
                                value={filter.sort}
                                name="sort"
                                // value={filter.sort}
                                id="input" className="form-control"
                                onChange={handlerEvent}>
                                <option value={-1}>Tất cả</option>
                                <option value={1}>Kích hoạt</option>
                                <option value={0}>Hủy</option>
                            </select>

                        </td>
                        <td></td>
                    </tr>
                    {eleTask}
                </tbody>
            </table>


        </div>
    );
}
export default TaskList;