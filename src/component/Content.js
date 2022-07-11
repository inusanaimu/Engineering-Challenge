const DateComponent = (props) => {
  const date = new Date(props.date)

  return <h4 className=' p-2 border'>{date.toLocaleDateString()} </h4>
}

const Transaction = (props) => {
  const { title, id, user_id, status, type, name } = props.props
  return (
    <>
      <section className=' grid grid-cols-10 gap-3 my-2'>
        <aside className='p-2 border col-span-4 '>
          <div>
            <b>Name:</b> <span>{name}</span>
          </div>
          <div>
            <b>Type:</b> <span>{type}</span>
          </div>
          <div>
            <b>Status:</b> <span>{status}</span>
          </div>
        </aside>
        <div className=' p-2 col-span-6 border '>
          {' '}
          Transaction Details <br /> Ref No: {id}
          {user_id}
          <details> {title}</details>
        </div>
      </section>
    </>
  )
}

function Content(props) {
  // console.log(props)
  const { due_on } = props.data
  return (
    <>
      <div>
        <DateComponent date={due_on} />
        <Transaction props={props.data} />
      </div>
    </>
  )
}

export default Content
