import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { fetchUserListForGivenIds } from "../../store/features/userSlice";
import {
  ShiftSaveRequestDto,
  BreakSaveRequestDto,
  User,
  EShift,
} from "../../types";
import { fetchGetCompanyEmployees } from "../../store/features/companySlice";
import {
  fetchAssignShifts,
  fetchAssignBreak,
} from "../../store/features/userSlice";

function ShiftManagement() {
  const dispatch: AppDispatch = useDispatch();

  // Local state to manage shifts
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");
  const [selectedShift, setSelectedShift] = useState<string>("");
  const [shifts, setShifts] = useState<ShiftSaveRequestDto[]>([]);
  const [breaks, setBreaks] = useState<BreakSaveRequestDto[]>([]);


  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const fetchData = async (token: string) => {
      try {
        const action = await dispatch(
          fetchGetCompanyEmployees(`?token=${token}`)
        );
        if (fetchGetCompanyEmployees.fulfilled.match(action)) {
          const data: string[] = action.payload?.data;
          if (data) {
            dispatch(fetchUserListForGivenIds(data));
          }
        }
      } catch (error) {
        console.error("Error fetching company employees:", error);
      }
    };

    if (token) {
      console.log("Token in useEffect:", token);
      fetchData(token);
    }
  }, [dispatch]);

  // Selector for user list from Redux store
  const userList = useSelector((state: RootState) => state.user.userList);

  // Handler for assigning shift
  const handleAssignShift = async () => {
    if (selectedEmployee && selectedShift) {
      const shiftData: ShiftSaveRequestDto = {
        userId: selectedEmployee,
        type: selectedShift as EShift,
        start: new Date(),
        end: new Date(),
      };
      await dispatch(fetchAssignShifts(shiftData));
      setShifts([...shifts, shiftData]);
    } else {
      alert("Please select an employee and a shift.");
    }
  };

  const handleAssignBreak = async () => {
    if (selectedEmployee) {
      const breakData: BreakSaveRequestDto = {
        userId: selectedEmployee,
        description: "Break",
        start: new Date(),
        end: new Date(),
      };
      await dispatch(fetchAssignBreak(breakData));
      setBreaks([...breaks, breakData]); // Change shifts to breaks here
    } else {
      alert("Please select an employee.");
    }
  };

  return (
    <>
      {/* Table for displaying user list */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user: User, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <input type="datetime-local" />
              </td>
              <td>
                <input type="datetime-local" />
              </td>
              <td>
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

      {/* Controls for shift and break assignment */}
      <div>
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
          <option value={EShift.MORNING}>Morning Shift</option>
          <option value={EShift.AFTERNOON}>Evening Shift</option>
          <option value={EShift.NIGHT}>Night Shift</option>
        </select>
        <button onClick={handleAssignShift}>Assign Shift</button>
        <button onClick={handleAssignBreak}>Assign Break</button>
      </div>

      {/* Display assigned shifts */}
      <div>
        <h2>Assigned Shifts</h2>
        <ul>
          {shifts.map((shift, index) => (
            <li key={index}>
              {shift.userId}: {shift.type}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ShiftManagement;
