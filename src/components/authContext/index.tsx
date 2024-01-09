import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: (s: boolean) => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: (s) => {
    !s;
  },
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
