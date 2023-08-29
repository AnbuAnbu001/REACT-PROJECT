import React, { useState } from 'react'
import {FaTrash} from "react-icons/fa"

const Content = () => {
    const [items,setItems] = useState([{
        id:1,
        check:false,
        items:"HTML"
    },
    {
        id:2,
        check:false,
        items:"CSS"
    },
    {
        id:3,
        check:false,
        items:"JS"
    }
    ])
const handleChange = (id) =>{
     const listItems = items.map((item)=>
        item.id===id?{...item,check:!item.check}:item)
        setItems(listItems);
     }

    const handleDelete=(id)=>{
    const listItems= items.filter((item)=>item.id !==id)
    setItems(listItems);

   
    }


return (
    <main>
     <ul>
     {items.map((p)=> (
      <li className="item" key={p.id}>
      <input type="checkbox" checked={p.check} onChange={()=>handleChange(p.id)}/>
        <label style={(p.check)?{textDecoration:"line-through"}:null}onDoubleClick={()=>handleChange(p.id) }>{p.items}</label>
        <FaTrash onClick={()=>handleDelete(p.id)}role="button" tabIndex={0}/>
          </li>
      ))} 

      </ul>
        </main>

  )
}
                    
            
export default Content