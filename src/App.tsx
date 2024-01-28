
import ProductCards from './components/ProductCards'

function App() {
  

  return (
<div className=' grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-4 gap-3  m-4'>
  <ProductCards/>
  <ProductCards/>
  <ProductCards/>
  <ProductCards/>
  <ProductCards/>
</div>
  )
}

export default App
