import {
    FileAddFilled,
  } from '@ant-design/icons';
  import { Space } from 'antd';
import { useState } from 'react';



function TodoForms({addTodo}) {
    const [value, setValue]=useState('');
   



    const handleSubmit= e =>{
        e.preventDefault();// pour empecher le lancement au changement 
        if(!value) return;
        console.log(value);
        addTodo({
            id:Date.now(),
            text:value,
            completed:false
        })
        
        setValue('');

    }

    return(
        <div className="todo-forms">
            <form onSubmit={handleSubmit}> 
                <Space>
                <input type="text" 
                value={value}
                placeholder="Entrer vos taches à faire"
                onChange={e => setValue(e.target.value)}
                />
                <FileAddFilled/>
                </Space>
            </form>
            
        </div>
    )
    
}
export default TodoForms;