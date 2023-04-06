import { createContext, useMemo, useState } from "react";

import { UserModel } from "../model/Entities";

export const UserContext = createContext({
  user: {} as UserModel,
  setUser: (user: UserModel) => {},
});

export const useUser = () => {
  const [user, setUser] = useState();

  const userMemo = useMemo(() => ({ user, setUser }), [user]);
  return [userMemo, setUser];
};
