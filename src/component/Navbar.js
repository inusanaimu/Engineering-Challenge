const handleClick = () => {
  //  const url = 'https://gorest.co.in/public/v2/todos'
  // e.preventDefault()
  let search = document.getElementById('search')
  console.log(search.value)
}

function Navbar() {
  return (
    <>
      <div className=' w-full text-center border py-4'>
        <input
          type='text'
          id='search'
          placeholder='search'
          className='border-2 border-slate-400 p-2 hover:border-slate-700'
        />
        <label htmlFor='search' className=' font-bold'>
          <button
            onClick={() => {
              handleClick()
            }}
            className=' hover:bg-blue-500 font-bold m-2 bg-blue-400 p-2 border-2 border-slate-400 '
          >
            Submit
          </button>
        </label>
      </div>
    </>
  )
}

export default Navbar
