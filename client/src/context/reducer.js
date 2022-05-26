import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  TOGGLE_MODAL,
  ADD_IMAGE_BEGIN,
  ADD_IMAGE_SUCCESS,
  ADD_IMAGE_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GET_TRANSACTION_BEGIN,
  GET_TRANSACTION_SUCCESS,
  VERIFICATION_BEGIN,
  VERIFICATION_SUCCESS,
  SET_STATUS,

  
} from "./action"
import {initialState} from "./appContext"


//setting state variables according to requirements
const reducer = (state, action) => {

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.alertText,
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Created! Redirection...'
    }

  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login Successfull! Redirection...'
    }

  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === TOGGLE_SIDEBAR){
    return {...state, showSidebar : !state.showSidebar}
  }
  if (action.type === TOGGLE_MODAL){
    return {...state, showModal : !state.showModal}
  }

  if(action.type === LOGOUT_USER){
    return {...initialState,
      user : null,
      token : null,
      userLocation: '',
      jobLocation: '',
    }
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated'
    }

  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please Provide All Values',
    }
  }
  if (action.type === ADD_IMAGE_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === ADD_IMAGE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Added'
    }

  }
  if (action.type === ADD_IMAGE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if(action.type === HANDLE_CHANGE){
    return {
      ...state,
      [action.payload.name] : action.payload.value
    }
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      payto: '',
      accountNo: 0,
      upiId: '',
      amount: 0, 
    }
    return { ...state, ...initialState }
    
  }
  if(action.type === GET_USER_BEGIN){
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    }
  }

  if(action.type === GET_USER_SUCCESS){
    return {
      ...state,
      isLoading : false,
      users: action.payload.users,
      imageId : action.payload.imageId
    }
  }
  if(action.type === GET_TRANSACTION_BEGIN){
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    }
  }

  if(action.type === GET_TRANSACTION_SUCCESS){
    return {
      ...state,
      isLoading : false,
      transactions: action.payload.transactions,
      totalTransaction : action.payload.totalTransaction
    }
  }
  if(action.type === VERIFICATION_BEGIN){
    return {
      ...state,
      isLoading: true,
      showAlert: true,
      alertType : 'success',
      alertText : 'Verifying User Please Wait....'
    }
  }

  if(action.type === VERIFICATION_SUCCESS){
    return {
      ...state,
      isLoading : false,
      showAlert: false,
      paymentStatus : action.payload.status,
      face : action.payload.face,
      paymentFace : action.payload.paymentFace
    }
  }
  if(action.type === SET_STATUS){
    return {
      ...state,
      face: '',
      paymentStatus : false,
      paymentFace: '',
      file: '',
      alertText: '',
      alertType: ''
    }
  }
 
}
export default reducer