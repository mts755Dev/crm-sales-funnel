
import {Route,Routes,} from 'react-router-dom';
import CrmData from '../components/CrmData/CrmData';
import DropDown from '../components/DropDown';

  const routes =
  <Routes>
      <Route path="/"  element={<CrmData />}/>
      <Route path="?stage=:name" element={<DropDown />}/>
  </Routes>

export default routes;
