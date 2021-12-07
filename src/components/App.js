import React, { useState, Component } from 'react';
import './App.css';

// const App = () => {
//   const [editId, setEditId] = useState('');
//   const [showEdit, setShowEdit] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const [editInputValue, setEditInputValue] = useState('');
//   const [msg, setMsg] = useState('');
//   const [todoList, setToDoListValue]=useState([])
//   const addToDoList = () => {
//     setMsg('');
//     if (!inputValue) {
//       setMsg('Can not be empty');
//       return;
//     }
//     const todo=[...todoList];
//     todo.push({id:Date.now(),inputValue});
//     setToDoListValue(todo)
//     setInputValue('');
//   };

//   const todoClear=()=>{
//     setToDoListValue([])
//     setMsg('')
//   }

//   const deleteToDo=(id)=>{
//     const arr = todoList.filter(val=>{
//       return val.id !== id;
//     })
//     setToDoListValue(arr)
//   }

// const editInputData = () => {
//   const arr = todoList.map(val => {
//     if (editId === val.id) {
//       val.inputValue = editInputValue;
//     }
//     return val;
//   });
//   setEditInputValue('');
//   setToDoListValue(arr);
//   setEditId('');
//   setShowEdit(false);
// }

//   const EditInput=()=>{
//     return (
//       <div>
//         <input type="text" onChange={e => setEditInputValue(e.target.value)} value={editInputValue} />
//         <button onClick={editInputData}>Edit</button>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
//       <button onClick={addToDoList}>Submit</button>
//       {msg ? <p>{msg}</p> : null}
//       {showEdit ? <EditInput /> : null}
//       {todoList.length > 0 ? (
//         <table>
//         <thead>
//           <th>Id</th>
//           <th>Value</th>
//           <th>Action</th>
//         </thead>
//         <tbody>
//           {
//             todoList.map(val => {
//               return (
//                 <tr key={val.id}>
//                   <td>{val.id}</td>
//                   <td>{val.inputValue}</td>
//                   <td>
//                     <button className="button" onClick={()=>deleteToDo(val.id)}>Delete</button>
//                     <button className="button"onClick={()=>{
//                       setEditId(val.id)
//                       setShowEdit(true);
//                     }}>Edit</button>
//                   </td>
//                 </tr>
//               );
//           })
//           }
//         </tbody>
//       </table> ) : null}
// <div>
//   <button onClick={todoClear}>Clear</button>
// </div>
//     </div>
//   );
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      editId: '',
      showEdit: false,
      inputValue: '',
      editInputValue: '',
      msg: '',
      todoList: []
    };

    this.addToDoList = this.addToDoList.bind(this);
  }

  addToDoList() {
    this.setState({
      msg: ''
    });
        if (!this.state.inputValue) {
          this.setState({
            msg: 'Can not be empty'
          });
          return;
        }
        const todo = [...this.state.todoList];
        todo.push({id:Date.now(),inputValue: this.state.inputValue});
        this.setState({
          msg: '',
          todoList: todo,
          inputValue: ''
        });

        setTimeout(() => {
        console.log("---->",this.state.todoList)
        }, 100);

  };



  render() {
    return (
      <div>
         <input type="text" onChange={e => this.setState({inputValue:e.target.value})} value={this.state.inputValue} />
       <button onClick={this.addToDoList}>Submit</button>
      </div>
    );
  };
}

export default App;
