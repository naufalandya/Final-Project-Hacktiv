import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  name: string;
  email: string;
  phone: string;
  photo: string; // URL untuk foto profil
}

const initialState: ProfileState = {
  name: "Your Name",
  email: "your.email@example.com",
  phone: "123456789",
  photo: "", // Foto placeholder kosong
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile(state, action: PayloadAction<Partial<ProfileState>>) {
      Object.assign(state, action.payload);
      localStorage.setItem("profile", JSON.stringify(state)); // Simpan ke localStorage
    },
    loadProfile(state) {
      const storedProfile = localStorage.getItem("profile");
      if (storedProfile) {
        Object.assign(state, JSON.parse(storedProfile));
      }
    },
  },
});

export const { updateProfile, loadProfile } = profileSlice.actions;
export default profileSlice.reducer;
