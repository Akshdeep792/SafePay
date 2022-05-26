import { useState } from 'react'
import { Alert } from '../../components/UI/index'
import { Input } from '../../components/UI/index'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/Profile'

const Profile = () => {
  const { user, showAlert, updateUser, isLoading } = useAppContext()
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [upiId, setUpiId] = useState(user?.upiId)
  const [number, setNumber] = useState(user?.number)


  const handleSubmit = (e) => {
    e.preventDefault()

    updateUser({ name, email, lastName, upiId, number })
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className='form-center'>
          <Input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            labelText='last name'
            type='text'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
          labelText='upiId'
            type='text'
            name='upiId'
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
           <Input
          labelText='number'
            type='text'
            name='number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile