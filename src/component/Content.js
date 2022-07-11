const DateComponent = () => {
  return <h4 className=' p-2 border'>date obj </h4>
}

const Transaction = () => {
  return (
    <>
      <section className=' grid grid-cols-4 gap-3 my-2'>
        <aside className='p-2 border'>user details</aside>{' '}
        <details className=' p-2 col-span-3 border '>
          {' '}
          Transaction Details
        </details>
      </section>
    </>
  )
}

function Content() {
  return (
    <>
      <div>
        <DateComponent />
        <Transaction />
      </div>
    </>
  )
}

export default Content
