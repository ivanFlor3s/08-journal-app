import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploadImg } from '../../actions/notes'

export const NotesAppBar = () => {

  const {active} = useSelector(state => state.notes)
  const dispatch = useDispatch()
  const handleOnSave = ()=>{
    dispatch(startSaveNote(active))
  }

  const handlePictureClick = ()=>{
    document.querySelector('#fileSelector').click()

  }

  const handleFileChange = (e)=>{
    console.log(e)

    const file = e.target.files[0]
    if(file){
      dispatch(startUploadImg(file))
    }
  }

  return (
    <div className='notes__appbar'>
        <span>28 Agosto 2020</span>
        <input name='file' id='fileSelector' type="file" 
        style={{display:'none'}} onChange={handleFileChange}/>
        <div>
            <button className='btn' onClick={handlePictureClick}> Picture </button>
            <button className='btn' onClick={handleOnSave}> Save</button>
        </div>
    </div>
  )
}
