import { useAppContext } from '../../context/appContext'
import { useEffect } from 'react'
import Loading from '../UI/Loading'
import Wrapper from '../../assets/wrappers/UserContainer'
import { Image } from 'cloudinary-react'
const UserContainer = () => {
    const { getUser, users, isLoading, imageId } = useAppContext()
    useEffect(() => {
        getUser(); // getting userImages for showing and 
    }, [])
    //   loading till we get data from backend
    if (isLoading) {
        return <Loading center />
    }
    // const url = `${users.url}`
    // console.log(url)

    // if no image uploaded than this will show
    if (imageId === '') {

        return (
            <Wrapper>
                <h2>No Face...</h2>
            </Wrapper>
        )
    }
    return (
        <Wrapper>

            <div className='users'>
                <div className='card'>
                    {/* for showing image coming from backend. This is basically cloudinary syntax */}
                    <Image
                        cloudName="dcnkefkft"
                        publicId={imageId}
                        width='200'
                    />

                </div>


            </div>
        </Wrapper>
    )
}

export default UserContainer