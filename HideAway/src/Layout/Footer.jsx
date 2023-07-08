import React from 'react'

function Footer() {
  return (
    <div className="bg-dark text-light px-4 py-2 fw-lighter">
        <span style={{ letterSpacing: "0.2em" }}>
          {" "}
          All Right Reserved &copy; HideAway{" "}
        </span>
        <span className="float-end" style={{ letterSpacing: "0.2em" }}>
          Mail : hideaway@support.com , Call us : +012-3456789  <a className='text-center fw-semibold text-decoration-none rounded-1 border-0 bg-white letter-space1 p-2' href="#header">Scroll to Top</a>
        </span>
       
      </div>
  )
}

export default Footer