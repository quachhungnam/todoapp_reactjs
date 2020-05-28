import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Control from './components/Control';
import './App.css';

function App() {

  // const TasksData = [
  //   { id: genarateID(), name: 'Học bài', status: true },
  //   { id: genarateID(), name: 'Đá bóng tại sân Nam Cao', status: false },
  //   { id: genarateID(), name: 'Thi cuối kỳ', status: true },
  //   { id: genarateID(), name: 'Đánh tennis cùng đám bạn', status: false },
  //   { id: genarateID(), name: 'Đi nhậu cùng với thầy Hiệu trưởng', status: true },
  //   { id: genarateID(), name: 'Đánh bi da cùng đồng đội', status: true },
  // ]


  // const initFormState = { id: null, name: '', status: true }
  const initStatus = null
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('localData')) || [])
  const [Status, setStatus] = useState(initStatus)
  const [ShowForm, setShowForm] = useState(false)
  const [Editting, setEditting] = useState(false)
  const [CurrentTask, setCurrenTask] = useState({ id: null, name: '', status: '' })
  const [count, setCount] = useState('')
  const [keyword, setkeyword] = useState('')
  // const [sortBy, setsortBy] = useState('')
  // const [sortValue, setsortValue] = useState('')
  const showhideForm = () => {
    return ShowForm === true ? <TaskForm
      addTask={addTask}
      hideForm={hideForm}
      showFormEdit={showFormEdit}
      setEditting={setEditting}
      Editting={Editting}
      CurrentTask={CurrentTask}
      updateTask={updateTask}

    /> : ""
  }
  const hideForm = () => {
    setEditting(false)
    setShowForm(false)
  }
  const ThemCV = () => {

    if (Editting === true) {
      setShowForm(true)
    }
    else {
      setShowForm(ShowForm => !ShowForm)
    }
    setEditting(false)
  }
  const cogianForm = () => {
    return ShowForm === false ? "col-xs-12 col-sm-12 col-md-12 col-lg-12" : "col-xs-8 col-sm-8 col-md-8 col-lg-8"
  }
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  }

  const genarateID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  }

  const saveData = () => {
    localStorage.setItem("localData", JSON.stringify(tasks))
  }
  //THEM
  const addTask = (task) => {
    let stt = true
    if (task.status === 'false' || false) {
      stt = false
    }
    let newTask = { id: genarateID(), name: task.name, status: stt }
    setTasks([...tasks, newTask])
    saveData()
  }
  //SUA
  const updateTask = (task) => {
    let stt = true
    if (task.status === 'false' || false) {
      stt = false
    }
    let listTask = tasks
    let newTask = { id: task.id, name: task.name, status: stt }
    let index = findID(task.id)
    if (index !== -1) {
      listTask[index] = newTask
      setTasks(listTask)
      setCount(count => count + 1)
    }
    // setEditting(false)
  }

  useEffect(() => {
    setCurrenTask(CurrentTask)
  }, [CurrentTask])
  //SUA
  const updateStatus = (currentID) => {
    let temp = tasks
    let ind = findID(currentID)
    if (ind !== -1) {
      setStatus(!temp[ind].status)
      temp[ind].status = !temp[ind].status
      setTasks(temp)
    }
    saveData()
  }
  //TIM KIEM
  const searching = (data) => {
    // console.log('app: ')
    // console.log(data)

    setkeyword(data)
  }
  //XOA
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    saveData()
  }
  const showFormEdit = (Task) => {
    setEditting(true)
    setShowForm(true)
    setCurrenTask(Task)
    // console.log('Task duoc set: ')
    // console.log(CurrentTask)
    // console.log(Task)
    // console.log(Editting)
  }
  const showXep = (name, value) => {
    // console.log(value)
    // setsortBy(a)
    // setsortValue(b)
    var temp = tasks
    if (name === 'name') {
      temp.sort((a, b) => {
        if (a.name > b.name) return value;
        if (a.name < b.name) return -value;
        return 0;
      })
    }
    if (name === 'stt') {
      temp.sort((a, b) => {
        if (a.status > b.status) return -value;
        if (a.status < b.status) return value;
        return 0;
      })
    }
    setCount(count => count + 1)

  }
  function showData() {
    // console.log(tasks)
  }

  const findID = (id) => {
    let result = -1
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index
      }
    })
    return result
  }

  useEffect(() => {
    setStatus(null)
  },
    [Status]
  )
  useEffect(() => {
    saveData()
    // console.log('change')
  }, [tasks])
  useEffect(() => {
    setCurrenTask(CurrentTask)
    // console.log('currentTask')
  }, [CurrentTask])

  return (

    <div >
      <div className="container">
        <h1><center> <strong>Quản lý công việc</strong></center></h1>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {showhideForm()}
          </div>
          <div className={cogianForm()}>
            <div className="row">
              <div className={cogianForm()}>
                <button type="button" className="btn btn-primary" onClick={ThemCV} >Thêm công việc</button>
              </div>
              <div className={cogianForm()}>
                <button type="button" className="btn btn-danger" onClick={showData}>Create Data</button>
              </div>
              <Control
                sorting={showXep}
                searching={searching}
              />
            </div>
            <TaskList
              tasks={tasks}
              updateStatus={updateStatus}
              deleteTask={deleteTask}
              showFormEdit={showFormEdit}
              keywords={keyword}
            />
          </div>
        </div>
      </div>

    </div>
  );
}


export default App;
