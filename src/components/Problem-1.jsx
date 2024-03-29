import React, {useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [statusValue, setStatusValue] = useState('');
    const [taskList, setTaskList] = useState([])


    const handleInput = (e) =>{
        if(e.target.type === 'text'){
            const inputValue  =  e.target.value
            if(e.target.name === 'name'){
                setName(inputValue);
            }else if(e.target.name === 'status'){
                setStatus(inputValue);
                if( inputValue.toLowerCase() === 'active' ){
                    setStatusValue(1);
                }else if( inputValue.toLowerCase() === 'completed'){
                    setStatusValue(2);
                }else{
                    setStatusValue(3);
                }
            }
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(name === '' || status === ''){
            alert(`Can't submit empty field`)
        }else{
            setTaskList([...taskList,{taskName:name, taskStatus:status, taskStatusValue: statusValue}])
            setName('')
            setStatus('')
            setStatusValue('')
        }
    }

    const handleClick = (val) =>{
        setShow(val);
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input name='name' type="text" className="form-control" placeholder="Name" onChange={handleInput} value={name}/>
                        </div>
                        <div className="col-auto">
                            <input name='status' type="text" className="form-control" placeholder="Status" onChange={handleInput} value={status}/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {taskList.filter((task) => task.taskStatus.toLowerCase() === show).length === 0 ? (
                                taskList.sort((a,b) => a.taskStatusValue > b.taskStatusValue ? 1:-1)
                                    .map((task)=>(
                                        <tr>
                                            <td>{task.taskName}</td>
                                            <td>{task.taskStatus}</td>
                                        </tr>
                                    ))
                            ):(taskList.filter((task)=> task.taskStatus.toLowerCase() === show)
                                    .map((task)=>(
                                        <tr>
                                            <td>{task.taskName}</td>
                                            <td>{task.taskStatus}</td>
                                        </tr>
                                    ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;