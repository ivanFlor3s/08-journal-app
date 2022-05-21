import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

export const NotesAppBar = () => {

  const {active} = useSelector(state => state.notes)
  const dispatch = useDispatch()
  const handleOnSave = ()=>{
    dispatch(startSaveNote(active))
  }
  return (
    <div className='notes__appbar'>
        <span>28 Agosto 2020</span>
        <div>
            <button className='btn'> Picture </button>
            <button className='btn' onClick={handleOnSave}> Save</button>
        </div>
    </div>
  )
}
