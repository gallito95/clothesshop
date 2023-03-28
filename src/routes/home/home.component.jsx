import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Directory from '../../components/directory/directory.component';


const Home = () => {
  
const [progress, setProgress] = useState(10);


 const setValue = (e) => setProgress(
  progress >0 ? Number(e.target.value) : 0)

  return (
    <div>
      <Directory/>
      <Outlet />
    </div>
  );
};

export default Home;
