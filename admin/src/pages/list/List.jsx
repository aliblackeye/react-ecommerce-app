import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

function List({data,type}) {
  return (
    <div className="list">
      <Sidebar/>
      <div className="list-container">
        <Navbar/>
        <Datatable type={type} data={data}/>
      </div>
    </div>
  )
}

export default List