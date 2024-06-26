import { authReducer } from "@/pages/login/login.slice";
import { profileReducer } from "@/pages/profile/profile.slice";
import { tableSystemreducer } from "@/pages/tableSystem/tableSystem.slice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    table: tableSystemreducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppRootStateType = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
