//setting global context 

import React, { useReducer, useContext } from 'react'
import reducer from './reducer'
//importing actions
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  TOGGLE_MODAL,
  ADD_IMAGE_BEGIN,
  ADD_IMAGE_ERROR,
  ADD_IMAGE_SUCCESS,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  TRANSACTION_ERROR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GET_TRANSACTION_BEGIN,
  GET_TRANSACTION_SUCCESS,
  VERIFICATION_BEGIN,
  VERIFICATION_SUCCESS,
  SET_STATUS,



} from './action'

import axios from 'axios'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  showSidebar: false,
  showModal: false,
  users: [],
  totalUsers: 0,
  file: '',
  payto: '',
  accountNo: 0,
  upiId: '',
  amount: 0,
  paymentStatus: false,
  transactions: [],
  totalTransaction: 0,
  face: '',
  paymentFace: '',
  
  
}

//global app context
const AppContext = React.createContext()
const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const authFetch = axios.create({
    baseURL: '/api/v1',
  })

  authFetch.interceptors.request.use((config) => {

    config.headers.common['Authorization'] = `Bearer ${state.token}`
    return config
  },
    (error) => {
      return Promise.reject(error)
    }
  )

  authFetch.interceptors.response.use((response) => {

    return response
  },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error)
    }
  )


  //*****Helper Functions ***/

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert();
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      })
    }, 3000)
  }
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES })
  }
  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token);

  }
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user')

  }
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }
  const modalToggle = () => {
    dispatch({ type: TOGGLE_MODAL })
  }
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    removeUserFromLocalStorage();
  }
  const setStatus = ()=>{
    dispatch({type: SET_STATUS})
  }

  //***function-->login ,register and update user */
  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser);
      console.log(response);
      const { user, token } = await response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token },
      })
      addUserToLocalStorage({ user, token })
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: 'Something went Wrong' }
      })
    }
    clearAlert();
  }

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const response = await axios.post('/api/v1/auth/login', currentUser);

      const { user, token } = await response.data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      })
      addUserToLocalStorage({ user, token })
    } catch (error) {

      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: 'Something went Wrong' }
      })
    }
    clearAlert();
  }

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN })
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser)
      const { user, token } = data;
      dispatch({ type: UPDATE_USER_SUCCESS, payload: { user, token } })
      addUserToLocalStorage({ user, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({ type: UPDATE_USER_ERROR, payload: { msg: error.response.data.msg } })
      }
    }
    clearAlert();
  }
// function for adding face to database
  const addFace = async (data) => {
    dispatch({ type: ADD_IMAGE_BEGIN });
    try {

      await authFetch.post('/add-image',
        data
      )
      dispatch({ type: ADD_IMAGE_SUCCESS });
      clearAlert();

    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: ADD_IMAGE_ERROR,
        payload: { msg: 'Enable to Add User...' }
      })
    }
  }
// getting face from database
  const getUser = async () => {
    dispatch({ type: GET_USER_BEGIN })
    try {
      const { data } = await authFetch('/get-images')
      const { users, totalUsers } = data;
      dispatch({
        type: GET_USER_SUCCESS,
        payload: { users, totalUsers }
      })
    } catch (error) {
      console.log(error)

    }
  }
  //transaction doing transactions
  const makeTransaction = async () => {
    console.log("Running")
    try {
      const { payto, accountNo, upiId, amount, paymentStatus , paymentFace} = state;
      await authFetch.post('/trans/transaction', {
        payto,
        accountNo,
        upiId,
        amount,
        paymentStatus,
        paymentFace

      })
      
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({ type: TRANSACTION_ERROR, payload: { msg: error.response.data.msg } })

    }
  }
  //getting history of transactions
  const getTransaction = async () => {

    dispatch({ type: GET_TRANSACTION_BEGIN });
    try {
      const { data } = await authFetch('/trans/history');
      const { transactions, totalTransaction } = data;
      dispatch({
        type: GET_TRANSACTION_SUCCESS,
        payload: { transactions, totalTransaction }
      })
    } catch (error) {
      console.log(error)
    }
    clearAlert();
  }
  //verify user using face recognition by sending post request to flask backend using below route
  const verifyImage = async (imageSrc, knownUrl) => {
    dispatch({ type: VERIFICATION_BEGIN })
    try {
      const response  = await axios.post('http://127.0.0.1:5000/api/verify', { data: imageSrc , known : knownUrl })

      console.log(`${response.data}`);
      if (response.data === 'User') {
        dispatch({ type: VERIFICATION_SUCCESS, payload: { status: true, face : response.data, paymentFace: imageSrc } })

      }
      else {
        dispatch({ type: VERIFICATION_SUCCESS, payload: { status: false, face : response.data,  paymentFace: imageSrc } })

      }
    } catch (error) {
      console.log(`error = ${error}`)
      logoutUser();
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...state, displayAlert, registerUser, loginUser, logoutUser, toggleSidebar,
        modalToggle, addFace, handleChange, getUser, makeTransaction, clearValues,
        updateUser, getTransaction, verifyImage, setStatus
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }