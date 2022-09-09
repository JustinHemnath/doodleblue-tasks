import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//Pages
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';
import Form from './pages/Form/Form';
import Chatroom from './pages/Chatroom/Chatroom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="form" element={<Form />} />
          <Route path="chatroom" element={<Chatroom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
