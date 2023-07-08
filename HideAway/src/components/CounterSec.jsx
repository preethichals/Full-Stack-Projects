import React from 'react'

function CounterSec() {
  return (
    <>
  <div className="row container mx-auto my-3 text-uppercase bg-body-secondary ">
  <div className=" col d-flex flex-column bg-white my-2 letter-space2">
      <img className='m-auto my-3' src={require('./../Images/call.png')} alt='' width={'100rem'} height={'auto'} />
      <h5 className='text-center mt-2 '>Call Us</h5>
      <h5 className=' text-center mt-2 '>+012-3456789</h5>
  </div>
  <div className="col d-flex flex-column  my-2 ">
      <img className='m-auto mt-3' src={require('./../Images/mail.jpg')} alt='' width={'100rem'} height={'auto'} />
      <h5 className='text-center mt-2 letter-space2 bg-white'>Our Mail-Id</h5>
      <h5 className=' text-center mt-2 letter-space1'>hideaway@support.com</h5>
  </div>
  
  <div className="col d-flex flex-column bg-white my-2 letter-space2 ">
      <img className='m-auto mt-3' src={require('./../Images/chat.png')} alt='' width={'100rem'} height={'auto'} />
      <h5 className='text-center mt-2 '>Chat</h5>
      <h5 className=' text-center mt-2 '>+012-3456789</h5>
  </div>
  <div className="col d-flex flex-column  my-2 ">
      <img className='m-auto mt-3' src={require('./../Images/location.png')} alt='' width={'100rem'} height={'auto'} />
      <h5 className='text-center mt-2 letter-space2 bg-white'>Location</h5>
      <h5 className=' text-center mt-2 letter-space1'>HideAway-Resort</h5>
  </div>
  <div className="col d-flex flex-column bg-white  my-2 letter-space2 ">
      <img className='m-auto mt-3' src={require('./../Images/partner.png')} alt='' width={'100rem'} height={'auto'} />
      <h5 className='text-center mt-2'>24/7</h5>
      <h5 className=' text-center mt-2'>Service</h5>
  </div>
</div>

    </>
  )
}

export default CounterSec