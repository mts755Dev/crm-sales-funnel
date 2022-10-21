import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { deleteAPIData } from '../../services/CrmDataServices';
import EditPeople from '../crud/EditPeople';

const DataShow = ({ data, setData }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState({
    first_name: data.person.first_name,
    last_name: data.person.last_name
  })
  const deleteData = async(id) => {
    try{
      await deleteAPIData(id)
      setData(prevState => prevState.filter((item) => item.id !== id))
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <div className="card w-auto mb-3">
      <div className="card-body">
        <h5 className="card-title mt-3"><strong>Name:</strong> {name.first_name + " " + name.last_name}</h5>
        <p><strong>Stage:</strong> {data.stage}</p>
        <Button variant="dark" className="mx-4 mt-1 mb-1" onClick={()=>setShowEdit(true)} >Edit</Button>
        <Button variant="dark" className="mx-4 mt-1 mb-1" onClick={()=>deleteData(data.id)}>Delete</Button>
      </div>
      {showEdit && <div>
          <EditPeople setShowEdit={setShowEdit} setName={setName} dataId={data.id}/>
        </div>}
    </div>
  );
}

export default DataShow;
