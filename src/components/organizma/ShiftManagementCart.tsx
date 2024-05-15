import React, { useEffect, useState } from "react";
import { RootState, AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../../store/features/userSlice";
import { User } from "../../types";

function ShiftManagement() {
  const dispatch: AppDispatch = useDispatch();

  // Local state to manage shifts
  const [shifts, setShifts] = useState<{ employeeId: string; shift: string }[]>(
    []
  );
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [selectedShift, setSelectedShift] = useState<string>("");

  // Fetch user list on component mount
  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  // Selector for user list from Redux store
  const userList = useSelector((state: RootState) => state.user.userList);

  // Handler for assigning shift
  const handleAssignShift = () => {
    if (selectedEmployee && selectedShift) {
      setShifts([
        ...shifts,
        { employeeId: selectedEmployee, shift: selectedShift },
      ]);
      // You can dispatch an action here to save shift assignment to the database
    } else {
      alert("Please select an employee and a shift.");
    }
  };

  // Handler for assigning break
  const handleAssignBreak = () => {
    if (selectedEmployee) {
      setShifts([...shifts, { employeeId: selectedEmployee, shift: "Break" }]);
      // You can dispatch an action here to save break assignment to the database
    } else {
      alert("Please select an employee.");
    }
  };

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">
              <label>
                <i className="fa fa-hashtag"></i>
              </label>
            </th>
            <th className="text-center">
              <label>
                <i className="fa fa-fa-user"></i>
              </label>
            </th>
            <th className="text-center">
              <i className="fa fa-envelope"></i>
            </th>
            <th className="text-center">
              <i className="fa fa-fa-mobile"></i>
            </th>
            <th className="text-center">
              <i className="fa fa-calendar-days"></i>
            </th>
            <th className="text-center">
              <i className="fa fa-fa-calendar"></i>
            </th>
            <th className="text-center">Actions</th>{" "}
            {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {userList.map((user: User, index) => (
            <tr key={user.id}>
              <td className="text-center align-content-center">{index}</td>
              <td className="text-center align-content-center">
                {user.fullName}
              </td>
              <td className="text-center align-content-center">{user.email}</td>
              <td className="text-center align-content-center">
                {user.phoneNumber}
              </td>
              <td className="text-center align-content-center">
                <input type="datetime-local" className=""></input>
              </td>
              <td className="text-center align-content-center">
                <input type="datetime-local" className=""></input>
              </td>
              <td className="text-center align-content-center">
                <button onClick={() => setSelectedEmployee(user.id)}>
                  Assign Shift
                </button>
                <button onClick={() => setSelectedEmployee(user.id)}>
                  Assign Break
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* Shift and break assignment controls */}
        <select
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          <option value="">Select Employee</option>
          {userList.map((user: User) => (
            <option key={user.id} value={user.id}>
              {user.fullName}
            </option>
          ))}
        </select>
        <select
          value={selectedShift}
          onChange={(e) => setSelectedShift(e.target.value)}
        >
          <option value="">Select Shift</option>
          <option value="Morning Shift">Morning Shift</option>
          <option value="Evening Shift">Evening Shift</option>
          <option value="Night Shift">Night Shift</option>
        </select>
        <button onClick={handleAssignShift}>Assign Shift</button>
        <button onClick={handleAssignBreak}>Assign Break</button>
      </div>
      <div>
        {/* Display assigned shifts */}
        <h2>Assigned Shifts</h2>
        <ul>
          {shifts.map((shift, index) => (
            <li key={index}>
              {shift.employeeId}: {shift.shift}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ShiftManagement;
