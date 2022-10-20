import { useState, useEffect } from "react"
import { getAPIData } from "../../services/CrmDataServices"
import DataShow from "./DataShow";
import DropDown from "../DropDown";
import { Button } from 'react-bootstrap';
import AddPeople from "../crud/AddPeople";

const CrmData = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [stage, setStage] = useState("Select Stage")
  const [data, setData] = useState([])
  useEffect( () => {
    const getData = async()=>{
      const res = await getAPIData()
      setData(res.data)
    }
    getData();
  },[]);

  return(
    <div className="container w-50 mt-5">
      <div className="card d-flex justify-content-between">
        <div className="card-body">
          <h1 className="mb-3">CRM Sales Funnel</h1>
          <div className="mb-3">
            <DropDown setData = {setData} setStage={setStage} stage={stage}/>
          </div>
          <Button variant="dark" className="mx-4 mb-3" onClick={()=>setShowAdd(true)} >Add People</Button>
          {showAdd && <div>
          <AddPeople setShowAdd={setShowAdd} setData={setData} stage={stage}/>
        </div>}
          {data.filter(data => data.person !== null).map((data) => <DataShow key = {data.id} data = {data} setData={setData} stage={stage}/> )}
        </div>
      </div>
    </div>
  );
}

export default CrmData
