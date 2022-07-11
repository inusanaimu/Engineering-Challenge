const handleClick = (e) => {
  // e.preventdefault()
  if (e === 'Range' || e === 'Foreign') {
    return alert('Just to show more options can be added')
  }
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
