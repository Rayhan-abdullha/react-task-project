import React, { useState } from "react";
import ModalA from "./modal/ModalA";
import ModalB from "./modal/ModalB";
const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);

  const handleShowModalA = () => {
    window.history.replaceState({}, "", "/problem-2/modal-A");
    setShowModalA(true);
  };
  const handleShowModalB = () => {
    window.history.replaceState({}, "", "/problem-2/modal-B");
    setShowModalB(true);
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={handleShowModalA}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={handleShowModalB}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>
      <ModalA
        showModalA={showModalA}
        setShowModalA={setShowModalA}
        setShowModalB={setShowModalB}
      />
      <ModalB
        showModalB={showModalB}
        setShowModalB={setShowModalB}
        setShowModalA={setShowModalA}
      />
    </div>
  );
};

export default Problem2;
