import { createContext } from "react";
import MyBoardWrite from "../../src/components/units/22-04-content-api/MyBoardWrite.container";

export const MyContext = createContext(null);
export default function ContextApiPage() {
  const value = {
    isEdit: true,
  };

  return (
    <MyContext.Provider value={value}>
      <MyBoardWrite />
    </MyContext.Provider>
  );
}
