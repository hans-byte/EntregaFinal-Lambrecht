import NavBar from '../components/NavBar'
import ItemListContainer from '../components/ItemListContainer'
import { useParams } from 'react-router-dom'

function Root() {
  const params = useParams();
  const boolcategory = Boolean(params.id);
  return (
    <div>
      <NavBar />
      <ItemListContainer boolcategory={boolcategory} categoryId ={params.id}/>
    </div>
  )
}

export default Root