import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, Error, Register, ProtectedRoutes, TransactionPage, Status, Verification} from './pages';
import { Dashboard, SharedLayout, History, AddFace, Profile } from './pages/Dashboard'
import {useAppContext} from './context/appContext'
function App() {

  const {user} = useAppContext();
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes to diffrent pages in WebApp */}
        <Route path="/"
          element=
          {<ProtectedRoutes>
            <SharedLayout />
          </ ProtectedRoutes>
          }>
          <Route index path="/" element={<Dashboard />} />
          <Route path="history" element={<History />} />
          <Route path="add-face" element={<AddFace />} />
          <Route path="profile" element={<Profile />} />
        </Route>
       {user && <Route path='/transaction' element={<TransactionPage />} />}
       {user && <Route path='/verification' element={<Verification />} />}
       {user && <Route path='/status' element={<Status />} />}

        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
