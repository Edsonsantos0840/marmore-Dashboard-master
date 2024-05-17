import React from 'react'

export default function Select(props : any) {
  return (
    <>
     <label  className=' w-full text-center  '>
        <select className=' w-full text-center'
          id={props.id}
          value={props.value}
          onChange={props.change}
        >
            <option value=""  >{props.texto}</option>
            {props.children}

        </select>
      </label>
    
    </>
  )
}
