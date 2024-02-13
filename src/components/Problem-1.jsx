import React, { useState } from "react";

const Problem1 = () => {
  const [formData, setFormData] = useState({ name: "", status: "" });
  const [show, setShow] = useState("all");
  const [allTask, setAllTask] = useState([]);
  let showDataByStatus = [];
  if (show === "all") {
    showDataByStatus = [...allTask];
  } else {
    showDataByStatus = allTask.filter(
      (item) => item.status.toLocaleLowerCase() === show.toLocaleLowerCase()
    );
  }

  // onchange handler
  const handleChange = (e) => {
    setFormData((prev) => {
      const updatedInput = {
        ...prev,
        [e.target.name]: e.target.value,
      };
      return updatedInput;
    });
  };

  // handleSubmit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 5000),
      name: formData.name,
      status: formData.status,
    };
    setAllTask((prev) => {
      return [task, ...prev];
    });
  };

  // toggle task handler
  const handleClick = (val) => {
    setShow(val);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={formData.name}
              />
            </div>
            <div className="col-auto">
              <input
                onChange={handleChange}
                type="text"
                name="status"
                className="form-control"
                placeholder="Status"
                value={formData.status}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
              {showDataByStatus?.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
