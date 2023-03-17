import NavBar from '../components/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer'
import { useParams } from 'react-router-dom'

function Detail_rout() {
  const params = useParams();


  return (
    <div>
      <NavBar />
      <ItemDetailContainer Id ={params.id}/>
    </div>
  )
}
export default Detail_rout