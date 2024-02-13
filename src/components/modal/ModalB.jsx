import axios from "axios";
import React, { useState, useEffect } from "react";
import ModalC from "./ModalC";

const ModalB = ({ showModalB, setShowModalA, setShowModalB }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEven, setIsEven] = useState(false);

  const [showModalC, setShowModalC] = useState(false);
  // filter data isEven
  let filterData = data;
  if (isEven) {
    filterData = data?.filter((item) => {
      if (item.id % 2 === 0) {
        return item;
      }
    });
  }
  const handleCloseModal = () => {
    window.history.replaceState({}, "", "/problem-2");
    setShowModalB(false);
  };
  const handleSwitchModalB = () => {
    window.history.replaceState({}, "", "/problem-2/modal-B");
    setShowModalB(true);
  };
  const handleSwitchModalA = () => {
    window.history.replaceState({}, "", "/problem-2/modal-A");
    setShowModalB(false);
    setShowModalA(true);
  };

  useEffect(() => {
    axios
      .get("https://contact.mediusware.com/api/country-contacts/united states/")
      .then((res) => {
        setData(res?.data?.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const openModalC = () => {
    setShowModalC(true);
  };
  return (
    <>
      {showModalB && (
        <div className="modal" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal B</h5>
                <div className="">
                  <button
                    onClick={handleSwitchModalA}
                    type="button"
                    className="btn btn-secondary me-3"
                  >
                    All Contacts
                  </button>
                  <button
                    onClick={handleSwitchModalB}
                    type="button"
                    className="btn btn-primary"
                  >
                    US Contacts
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary ms-3"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="modal-footer">
                <label htmlFor="onlyeven">Only Even</label>
                <input
                  onChange={() => setIsEven((prev) => !prev)}
                  type="checkbox"
                  name="onlyeven"
                  id="onlyeven"
                  value={isEven}
                />
              </div>
              <div className="modal-body">
                {filterData?.map((item) => (
                  <div
                    onClick={openModalC}
                    className="border"
                    key={item.id}
                    style={{ cursor: "pointer" }}
                  >
                    <p>{item.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {showModalC && (
        <ModalC showModalC={showModalC} openModalC={setShowModalC} />
      )}
    </>
  );
};

export default ModalB;
