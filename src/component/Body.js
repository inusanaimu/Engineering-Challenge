import Navbar from './Navbar'
import FilterBar from './FilterBar'
import Content from './Content'

function Body() {
  return (
    <div className='p-4 mx-auto' style={{ maxWidth: '40em', minWidth: '20em' }}>
      <Navbar />
      <FilterBar />
      <Content />
    </div>
  )
}

export default Body
