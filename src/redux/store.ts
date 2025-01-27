import { configureStore } from "@reduxjs/toolkit";
import logger from "../components/middlewares/logger";
import counterSlice from "./features/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
