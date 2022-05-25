import { IoBarChartSharp } from 'react-icons/io5'
import {  MdTagFaces} from 'react-icons/md'
import { FaHistory } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'


const links = [
  {
    id: 1,
    text: 'stats',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'history',
    path: 'history',
    icon: <FaHistory />,
  },
  {
    id: 3,
    text: 'add face',
    path: 'add-face',
    icon: <MdTagFaces />,
  },
  {
    id: 4,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
]

export default links