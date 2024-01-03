import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

type userIdT = {
	userId: string | null
}

const initialState: userIdT = {
	userId: null
}

export const userProfileIdSlice = createSlice({
	name: "userProfileId",
	initialState,
	reducers: {
		setUserId: (state, action) => {
			state.userId = action.payload
		}
	}
})

export const { setUserId } = userProfileIdSlice.actions

export default userProfileIdSlice.reducer

export const userProfileId = (state: RootState) =>
	state.data.userProfileId.userId