const ResultGame = ({ attempts, result }) => {
  return (
    <>
      <h2 className='result-info'>Attempts: {attempts}</h2>
      <h2 className='result-info'>Result: {result}</h2>
    </>
  )
}
export { ResultGame }