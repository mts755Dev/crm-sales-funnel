import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const DropDown = ({ stage, setStage }) => (
  <DropdownButton id="Black-btn" title={stage}>
    <Dropdown.Item onClick={() => setStage('All')}>All</Dropdown.Item>
    <Dropdown.Item onClick={() => setStage('Diligence')}>Diligence</Dropdown.Item>
    <Dropdown.Item onClick={() => setStage('Contacted')}>Contacted</Dropdown.Item>
    <Dropdown.Item onClick={() => setStage('Lead')}>Lead</Dropdown.Item>
    <Dropdown.Item onClick={() => setStage('Closed')}>Closed</Dropdown.Item>
    <Dropdown.Item onClick={() => setStage('Rejected')}>Rejected</Dropdown.Item>
  </DropdownButton>
)


export default DropDown;
