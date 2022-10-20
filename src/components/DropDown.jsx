import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getAPIData, getAPIStagedData } from '../services/CrmDataServices';

const DropDown = (props) => {
  const getData = async(stage)=>{
    const res = await getAPIStagedData(stage)
    props.setData(res.data)
  }
  const getAllData = async()=>{
    const res = await getAPIData()
    props.setData(res.data)
  }
  return(
    <DropdownButton id="Black-btn" title="Select Stage">
      <Dropdown.Item onClick={()=>getAllData()}>All</Dropdown.Item>
      <Dropdown.Item onClick={()=>getData("Diligence")}>Diligence</Dropdown.Item>
      <Dropdown.Item onClick={()=>getData("Contacted")}>Contacted</Dropdown.Item>
      <Dropdown.Item onClick={()=>getData("Lead")}>Lead</Dropdown.Item>
      <Dropdown.Item onClick={()=>getData("Closed")}>Closed</Dropdown.Item>
      <Dropdown.Item onClick={()=>getData("Rejected")}>Rejected</Dropdown.Item>
    </DropdownButton>
  )

}

export default DropDown;
