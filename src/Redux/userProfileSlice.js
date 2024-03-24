import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const apiUrl = 'http://localhost:3001/api/v1/user/profile';

export const fetchUserProfile = createAsyncThunk(
    'user/fetchUserProfile',
    async (_, thunkAPI) => {
      try {

        const token = thunkAPI.getState().auth.token;
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const editUserName = createAsyncThunk(
    'user/editUserName',
    async (editedUserName, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.token;
        const response = await fetch(apiUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(editedUserName)
        });
        if (!response.ok) {
          throw new Error('Failed to update user profile');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        userProfile: null,
        loading: false,
        error: null
    },
    
    reducers: {
        resetUserProfile: (state) => {
            state.userProfile = null;
          },
    },

    extraReducers: (builder) => {
        builder
          .addCase(fetchUserProfile.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.userProfile = action.payload.body;
          })
          .addCase(fetchUserProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(editUserName.fulfilled, (state, action) => {
            state.userProfile = action.payload.body;
          });
    }
  });

export const { resetUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
