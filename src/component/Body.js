import Navbar from './Navbar'
import FilterBar from './FilterBar'
import Content from './Content'
import myData from './data.json'

// console.log(myData)

// const url = 'https://gorest.co.in/public/v2/todos'
// let response
// async function getData() {
//   await fetch(url)
//     .then((res) => {
//       console.log(res.status)
//       res.json()
//     })
//     .then((data) => {
//       response = data
//       console.log(data)
//     })
// }

// const filterdArray = ()=>{
//   myData.filter()
// }

function Body() {
  return (
    <div className='p-4 mx-auto' style={{ maxWidth: '40em', minWidth: '20em' }}>
      <Navbar />
      <FilterBar />
      {myData.map((data) => {
        return (
          <>
            <Content key={data['user_id']} data={data} />
          </>
        )
      })}
    </div>
  )
}

export default Body
