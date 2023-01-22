import { SummaryResult } from "home/model";
import { createContext, Dispatch, PropsWithChildren, useReducer, useContext } from "react";

interface StoreData {
  summary: SummaryResult;
  summaryLoaded: boolean;
}

const initialState: StoreData = {
  summary: {
    occupiedRooms: 0,
    pendingRequests: 0,
    pendingTasks: 0,
    pendingAlerts: 0
  },
  summaryLoaded: false
};

interface ResetAction {
  type: "RESET";
}

interface SummaryLoadedAction {
  type: "SUMMARY_LOADED";
  summary: SummaryResult;
}

type StoreAction = ResetAction | SummaryLoadedAction;

const updateStore = (store: StoreData, action: StoreAction) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "SUMMARY_LOADED":
      return {
        ...store,
        summary: action.summary,
        summaryLoaded: true
      };
    default:
      const _exhaustiveCheck: never = action;
      return store;
  }
};

interface StoreContextValue {
  store: StoreData;
  dispatch: Dispatch<StoreAction>
}

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export const StoreContainer = ({ children }: PropsWithChildren) => {
  const [ store, dispatch ] = useReducer(updateStore, initialState);

  return (
    <StoreContext.Provider value={{
      store,
      dispatch
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const value = useContext(StoreContext);
  if (!value) {
    throw new Error("useStore must be used within a StoreContainer");
  }
  return value;
};