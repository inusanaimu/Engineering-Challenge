const handleClick = (e) => {
  // e.preventdefault()
  if (e === 'Range') alert('Just to show more option')
  console.log(e)
}

function Filter(props) {
  return (
    <button
      onClick={() => {
        handleClick(props.type)
      }}
      className=' p-2 border-2 m-1 bg-slate-600 font-semibold text-yellow-50'
    >
      {' '}
      {props.type ? props.type : ' filter btn '}{' '}
    </button>
  )
}

export default Filter
