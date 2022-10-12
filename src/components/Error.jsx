
function Error({mensaje}) {
  return (
    <div>
        <div className='bg-red-700 text-center p-3 mb-3 rounded-lg'>
          <p className='text-white uppercase font-bold'>{mensaje}</p>
        </div>
    </div>
  )
}


export default Error