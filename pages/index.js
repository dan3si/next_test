function Home({ id, title, completed }) {
  return (
    <div>
      Id = {id}
      Title = {title}
      Completed = {completed}
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const {
    id,
    title,
    completed
  } = await res.json()

  return {
    id,
    title,
    completed
  }
}

export default Home
