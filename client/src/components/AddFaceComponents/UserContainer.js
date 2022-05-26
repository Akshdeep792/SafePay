import {useAppContext} from '../../context/appContext'
import {useEffect} from 'react'
import Loading from  '../UI/Loading'
import Wrapper from '../../assets/wrappers/UserContainer'
import {Image} from 'cloudinary-react'
const UserContainer = () => {
    const {getUser, users, isLoading, imageId} = useAppContext()
    useEffect(() => {
        getUser();
    }, [])

    if(isLoading){
        return <Loading center/>
    }
    const url = `${users.url}`
    console.log(url)

    if(imageId === ''){
        return (
            <Wrapper>
                <h2>No Face...</h2>
            </Wrapper>
        )
    }
    return(
        <Wrapper>
               
                <div className='users'> 
                        <div className='card'>
                            <Image 
                              cloudName="dcnkefkft"
                               publicId = {imageId}
                               width='200'
                            />
                            
                        </div>

                        
                </div>
        </Wrapper>
    )
}

export default UserContainer