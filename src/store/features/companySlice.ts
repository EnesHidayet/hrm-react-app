import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import companyController from "../../config/CompanyController";
import { baseResponseEntity, CompanyState } from "../../types";

// TODO COMPANY INITIAL STATE FETCH VE SLICE ISMLERI DUZENLENECEK. LOGIN/PERSONEL VB KALMIS ISIMLER DUZELTILECEK.
const companyInitialState: CompanyState = {
  companyList: [],
  isLoadingFetchApproveCompany: false,
  isLoadingFetchCompanyList: false,
};

export const fetchApproveCompany = createAsyncThunk(
  "company/fetchApprove",
  // COMPANY ID AS A PAYLOAD
  async (payload: number) => {
    try {
      const result: baseResponseEntity = await fetch(
        companyController.approve,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
        .then((data) => data.json())
        .then((data) => data);

      return result;
    } catch (error) {
      console.log("ERROR: company/fetchApproveCompany...:" + error);
    }
  }
);
export const fetchDenyCompany = createAsyncThunk(
  "company/fetchDeny",
  // COMPANY ID AS A PAYLOAD
  async (payload: number) => {
    try {
      const result: baseResponseEntity = await fetch(companyController.deny, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((data) => data.json())
        .then((data) => data);

      return result;
    } catch (error) {
      console.log("ERROR: company/fetchDenyCompany...:" + error);
    }
  }
);

export const fetchCompanyList = createAsyncThunk(
  "company/fetchCompanyList",
  async () => {
    try {
      const result: baseResponseEntity = await fetch(companyController.list, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then((data) => data);
      return result;
    } catch (error) {
      console.log("ERROR: company/fetchCompanyList...:" + error);
    }
  }
);

const companySlice = createSlice({
  name: "company",
  initialState: companyInitialState,

  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchApproveCompany.pending, (state) => {
      state.isLoadingFetchApproveCompany = true;
    }); // işlemin devam ettiği an

    build.addCase(fetchApproveCompany.fulfilled, (state, action) => {
      state.isLoadingFetchApproveCompany = false;
      if (action.payload?.status !== 200) {
        alert("Hata...:" + action.payload?.message);
      } else {
        console.log("gelen data...:", JSON.stringify(action.payload));
      }

      const companyId = action.meta.arg;
      const updatedCompanyList = state.companyList.map((company) =>
        company.id === companyId ? { ...company, isApproved: true } : company
      );
      state.companyList = updatedCompanyList;
    });

    build.addCase(fetchDenyCompany.pending, (state) => {
      state.isLoadingFetchApproveCompany = true;
    }); // işlemin devam ettiği an
    build.addCase(fetchDenyCompany.fulfilled, (state, action) => {
      state.isLoadingFetchApproveCompany = false;
      if (action.payload?.status !== 200) {
        alert("Hata...:" + action.payload?.message);
      } else {
        console.log("gelen data...:", JSON.stringify(action.payload));
      }
      const companyId = action.meta.arg;
      const updatedCompanyList = state.companyList.map((company) =>
        company.id === companyId ? { ...company, isApproved: false } : company
      );
      state.companyList = updatedCompanyList;
    });

    // işlemin tamamladığı an
    build.addCase(fetchApproveCompany.rejected, (state) => {
      state.isLoadingFetchApproveCompany = false;
    }); // işlemin iptal olduğu an

    build.addCase(fetchCompanyList.pending, (state) => {
      state.isLoadingFetchCompanyList = true;
    }); // işlemin devam ettiği an
    build.addCase(fetchCompanyList.fulfilled, (state, action) => {
      state.isLoadingFetchCompanyList = false;
      console.log("Register fullfill...:", action.payload);
      state.companyList = action.payload?.data;
    }); // işlemin tamamladığı an
    build.addCase(fetchCompanyList.rejected, (state) => {
      state.isLoadingFetchCompanyList = false;
    }); // işlemin iptal olduğu an
  },
});
export default companySlice.reducer;
