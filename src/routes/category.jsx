import NavBar from '../components/NavBar'
import ItemListContainer from '../components/ItemListContainer'
import { useParams } from 'react-router-dom'

function Category_rout() {
  const params = useParams();
  const boolcategory = Boolean(params.id);


  return (
    <div>
      <NavBar />
      <ItemListContainer boolcategory={boolcategory} categoryId ={params.id}/>
      
    </div>
  )
}

export default Category_rout