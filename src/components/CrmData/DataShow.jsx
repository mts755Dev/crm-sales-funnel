import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { deleteAPIData, getAPIData, getAPIStagedData } from '../../services/CrmDataServices';
import EditPeople from '../crud/EditPeople';

const DataShow = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const deleteData = async(id)=>{
    await deleteAPIData(id);
    if(props.stage==='All'){
      const res = await getAPIData()
      props.setData(res.data)
    }
    else{
      const res = await getAPIStagedData(props.stage)
      props.setData(res.data)
    }
  }

  return (
    <div className="card w-auto mb-3">
      <div className="card-body">
        <h5 className="card-title mt-3"><strong>Name:</strong> {props.data.person.first_name + " " + props.data.person.last_name}</h5>
        <p><strong>Stage:</strong> {props.data.stage}</p>
        <Button variant="dark" className="mx-4 mt-1 mb-1" onClick={()=>setShowEdit(true)} >Edit</Button>
        <Button variant="dark" className="mx-4 mt-1 mb-1" onClick={()=>deleteData(props.data.id)}>Delete</Button>
      </div>
      {showEdit && <div>
          <EditPeople setShowEdit={setShowEdit} dataId={props.data.id} setData={props.setData} stage={props.stage}/>
        </div>}
    </div>
  );
}

export default DataShow;
