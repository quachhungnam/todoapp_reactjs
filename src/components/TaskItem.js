import React from 'react';
function TaskItem(props) {
    const statusLabel = () => {
        return props.status === true ? "label label-success" : "label label-danger"
    }
    const statusText = () => {
        return props.status === true ? "Kích hoạt" : "Hủy"
    }
    // const [currentID, setcurrentID] = useState(null)//that ra laID

    const onupdateStatus = () => {
        //khi click vao item, thi se goi ham Handle Item qua props va truyen di currentItem, tuc la props co su thay doi
        //props co su thay doi do truyen tham so-> effect duoc goi, va set
        props.updateStatus(props.id)
    }
    const editTask = () => {
        // console.log(props.id)
        let currentTask = { id: props.id, name: props.name, status: props.status }
        props.showFormEdit(currentTask)
    }

    const deleteTask = () => {
        // console.log(props.id)
        props.deleteTask(props.id)
    }
    // useEffect(() => {
    //     setcurrentID(currentID)
    // },
    //     [currentID]
    // )
    return (
        <tr>
            <td>{props.stt}</td>
            <td>{props.name}</td>
            <td>
                <span
                    className={statusLabel()}
                    onClick={onupdateStatus}
                >
                    {statusText()}
                </span>
            </td>
            <td>
                <button type="button" className="btn btn-primary" onClick={editTask}>Sửa</button>&nbsp;
                <button type="button" className="btn btn-danger" onClick={deleteTask}>Xóa</button>
            </td>
        </tr>
    )
}
export default TaskItem;


