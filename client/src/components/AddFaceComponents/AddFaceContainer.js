import { useState } from 'react'
import { Alert } from '../UI'
import Wrapper from '../../assets/wrappers/AddFace'
import { useAppContext } from '../../context/appContext'

const AddFaceContainer = () => {
    const { showAlert, isLoading, displayAlert , addFace, totalUsers} = useAppContext();
    const [singleFile, setSingleFile] = useState('');
    const fileHandler = (e) =>{
        setSingleFile(e.target.files[0])
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if( singleFile === ''){
            displayAlert();
            return ;
        }
        const formData = new FormData();
        formData.append('file', singleFile);
        addFace(formData);
        setSingleFile('');
    }

   return ( <Wrapper>
        <form className='form'>
            <h4>Add Face</h4>
            {showAlert && <Alert />}
            {/* search position */}
            <div className='form-center'>
               
                <div className='form-row'>
                    <label className='form-label'>Add Face</label>
                    <input type="file" className='form-input' onChange={fileHandler}/>
                </div>
                
                
                <button
                    className='btn btn-block'
                    disabled={isLoading}
                    onClick={handleSubmit}
                >
                    AddFace
                </button>
            </div>
        </form>
    </Wrapper>)
}

export default AddFaceContainer