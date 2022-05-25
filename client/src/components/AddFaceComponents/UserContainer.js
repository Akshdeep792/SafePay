import {useAppContext} from '../../context/appContext'
import {useEffect} from 'react'
import Loading from  '../UI/Loading'
import Wrapper from '../../assets/wrappers/UserContainer'
const UserContainer = () => {
    const {getUser, users, isLoading} = useAppContext()
    useEffect(() => {
        getUser();
    }, [])

    if(isLoading){
        return <Loading center/>
    }


    if(users.length === 0){
        return (
            <Wrapper>
                <h2>No Face...</h2>
            </Wrapper>
        )
    }
    return(
        <Wrapper>
               
                <div className='users'>
                        {users.map((user) => 
                        <div className='card'>
                            <img key={user._id} src={`http://localhost:4000/${user.filePath}`} height="200" alt='user img' />
                            <footer className='info'>
                                <h2>{user.relation}</h2>
                            </footer>
                        </div>

                        )}
                </div>
        </Wrapper>
    )
}

export default UserContainer