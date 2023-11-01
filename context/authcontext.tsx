import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (!user.isLogin) {
      router.push("/auth/login");
    }
  }, [router, user]);
  return <>{user.isLogin ? children : null}</>;
};

export default ProtectedRoute;