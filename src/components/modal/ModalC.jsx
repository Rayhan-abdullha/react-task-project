import React from "react";

const ModalC = ({ showModalC, item }) => {
  console.log(item);
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
                <button type="button" className="btn btn-primary ms-3">
                  Close
                </button>
              </div>
              <div className="modal-body">
                <p>{}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalC;
