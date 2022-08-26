/* eslint-disable react/prop-types */
import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

const List = ({item, id, clickTitle, clickTrash}) => {
  return (
    <div className='wrapper_list'>
        <h4 className='list_title' onClick={() => clickTitle(item, id)}>{item.title}</h4>
        <div className='trash' onClick={() => clickTrash(id)}>
            <FaRegTrashAlt/>
        </div>
    </div>
  )
}

export default List