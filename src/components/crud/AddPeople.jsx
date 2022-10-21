import { useState} from "react";
import { addToAPIData, getAPIData, getAPIStagedData } from "../../services/CrmDataServices";
import { Button } from 'react-bootstrap';
const AddPeople = ({setShowAdd}) => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleAdd = async(event) => {
    event.preventDefault();
    await addToAPIData(inputs)
    setShowAdd(false);
  }
  return(
    <form onSubmit={handleAdd}>
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
      <label className="mb-3">Email Id:
      &ensp;
      <input
        type="text"
        name="email"
        value={inputs.email || ""}
        onChange={handleChange}
      />
      </label>
      <br />
      <label className="mb-3">Phone No:
      &ensp;
      <input
        type="text" pattern="[0-9]*"
        name="phone_num"
        value={inputs.phone_num || ""}
        onChange={handleChange}
      />
      </label>
      <br />

        <Button variant="dark" className="mx-4 mt-1 mb-3" type="submit" >Add</Button>
    </form>
  );
}

export default AddPeople;
