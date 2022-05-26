import { useState } from 'react'
import { Alert } from '../UI'
import Wrapper from '../../assets/wrappers/AddFace'
import { useAppContext } from '../../context/appContext'

// this component allow us to add photo
const AddFaceContainer = () => {
    const { showAlert, isLoading, displayAlert , addFace} = useAppContext();
    const [singleFile, setSingleFile] = useState(''); // setting value of image uploaded from local computer
    const fileHandler = (e) =>{
        setSingleFile(e.target.files[0])
    }
    // sending request for saving image
    const handleSubmit = (e) => {
        e.preventDefault();
        if( singleFile === ''){
            displayAlert('Please Add File');
            return ;
        }
    
        const reader = new FileReader();
        reader.readAsDataURL(singleFile) // read content of the file
        reader.onloadend= () =>{
            addFace(reader.result); // calll the function present in appContext.js 
        }
        setSingleFile('');
    }

   return ( <Wrapper>
        <form className='form'>
            <h4>Add Face</h4>
            {showAlert && <Alert />}
            
            <div className='form-center'>
               
                <div className='form-row'>
                    <label className='form-label'>Add Face</label>
                    <input type="file" className='form-input' onChange={fileHandler}/>
                </div>
                
                
                <button
                    className='btn btn-block'
                
                    onClick={handleSubmit}
                >
                    AddFace
                </button>
            </div>
        </form>
    </Wrapper>)
}

export default AddFaceContainer