import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-dark text-light px-4 py-2 fw-lighter">
        <span style={{ letterSpacing: "0.2em" }}>
          {" "}
          All Right Reserved &copy; Brand{" "}
        </span>
        <span className="float-end" style={{ letterSpacing: "0.2em" }}>
          Mail : freediet@support.com , Call us : +012-3456789
        </span>
      </div>
    </>
  );
}

export default Footer;
