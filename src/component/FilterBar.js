import Filter from './Filter'

function FilterBar() {
  return (
    <>
      <p> Filter by:</p>
      <div className=' my-2'>
        <Filter type='Date' />
        <Filter type='Status' />
        <Filter type='Range' />
        <Filter type='Foreign' />
      </div>
    </>
  )
}

export default FilterBar
