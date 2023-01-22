import { createContext, Dispatch, PropsWithChildren, useReducer, useContext } from "react";

interface StoreData {

}

const initialState: StoreData = {

};

interface ResetAction {
  type: "RESET";
}

type StoreAction = ResetAction;

const updateStore = (store: StoreData, action: StoreAction) => {
  switch (action.type) {
    case "RESET":
      return initialState;
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