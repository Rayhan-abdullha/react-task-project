import React from "react";

const ModalC = ({ showModalC, openModalC }) => {
  const handleClose = () => {
    openModalC(false);
  };
  return (
    <>
      {showModalC && (
        <div
          className="modal-3 modal"
          tabIndex="-1"
          style={{ display: "block", zIndex: 999 }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal C</h5>
                <button
                  onClick={handleClose}
                  type="button"
                  className="btn btn-primary ms-3"
                >
                  Close
                </button>
              </div>
              <div className="modal-body">
                <h3>Bangladesh</h3>
                <p>+8801798716196</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalC;
