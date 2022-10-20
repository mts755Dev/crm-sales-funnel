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
    <DropdownButton id="Black-btn" title={props.stage}>
      <Dropdown.Item onClick={()=>{getAllData(); props.setStage('All')}}>All</Dropdown.Item>
      <Dropdown.Item onClick={()=>{getData("Diligence"); props.setStage('Diligence')}}>Diligence</Dropdown.Item>
      <Dropdown.Item onClick={()=>{getData("Contacted"); props.setStage('Contacted')}}>Contacted</Dropdown.Item>
      <Dropdown.Item onClick={()=>{getData("Lead"); props.setStage('Lead')}}>Lead</Dropdown.Item>
      <Dropdown.Item onClick={()=>{getData("Closed"); props.setStage('Closed')}}>Closed</Dropdown.Item>
      <Dropdown.Item onClick={()=>{getData("Rejected"); props.setStage('Rejected')}}>Rejected</Dropdown.Item>
    </DropdownButton>
  )

}

export default DropDown;
