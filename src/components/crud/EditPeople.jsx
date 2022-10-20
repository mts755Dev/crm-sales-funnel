import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { updateAPIData, getAPIData } from '../../services/CrmDataServices';

const EditPeople = (props) => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleUpdate = async(event) => {
    event.preventDefault();
    await updateAPIData(props.dataId,inputs)
    const res = await getAPIData()
    props.setData(res.data)
    props.setShowEdit(false);
  }
  return(
    <form onSubmit={handleUpdate}>
      <label className="mb-3">First Name:
      &ensp;
      <input
        type="text"
        name="first_name"
        value={inputs.first_name || ""}
        onChange={handleChange}
      />
      	&ensp;
      </label>
      <br />
      <label className="mb-3">Last Name:
      &ensp;
      <input
        type="text"
        name="last_name"
        value={inputs.last_name || ""}
        onChange={handleChange}
      />
      </label>
      <br />
        <Button variant="dark" className="mx-4 mt-1 mb-3" type="submit" >Update Name</Button>
    </form>
  );
}

export default EditPeople;
