import React, { useReducer } from "react";
import { UserInfo } from "../types/types";
import { createCtx } from "../utils/createCtx";

const [useCtx, Provider] = createCtx<Context>();

interface Context {
  state: State;
  setUser: (user: UserInfo) => void;
  resetUser: () => void;
}

export enum ActionType {
  SetUser = "set-user",
  ResetUser = "reset-user",
}

export interface State {
  user?: UserInfo;
}

const initialState: State = {
  user: undefined,
};

interface SetUserAction {
  type: ActionType.SetUser;
  payload: UserInfo;
}

interface ResetUserAction {
  type: ActionType.ResetUser;
}

type Action = SetUserAction | ResetUserAction;

interface Props {
  children?: React.ReactElement;
}

type Reducer = (state: State, action: Action) => State;

const setUser = (dispatch: React.Dispatch<SetUserAction>) => (
  user: UserInfo
): void => {
  dispatch({
    type: ActionType.SetUser,
    payload: user,
  });
};

const resetUser = (dispatch: React.Dispatch<ResetUserAction>) => (): void => {
  dispatch({
    type: ActionType.ResetUser,
  });
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "set-user":
      return { ...state, user: action.payload };
    case "reset-user":
      return { ...state, user: undefined };
    default:
      return state;
  }
};

function AppProvider(props: Props): React.ReactElement {
  const [state, dispatch] = useReducer<Reducer>(reducer, initialState);

  const actions = {
    setUser: setUser(dispatch),
    resetUser: resetUser(dispatch),
  };

  return <Provider value={{ state, ...actions }}>{props.children}</Provider>;
}

export { useCtx as useAppContext, AppProvider };
