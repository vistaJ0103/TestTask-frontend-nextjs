import { ILoginResponse, IRegisterRequest, IUser } from "@/types";
import { http } from "./api";

class UserService {
  async getAll() {
    const res = await http.get<any[]>(`/user/all`);
    return res.data;
  }
  async delete(id: string) {
    const res = await http.delete<any[]>(`/user/${id}`);
    return res.data;
  }
  // async changeAvatar(payload: FormData) {
  //   const res = await http.patch<boolean>(`/user/settings/avatar`, payload);
  //   return res.data;
  // }

  async getUserById(id: string) {
    const res = await http.get<IUser>(`/user/${id}`);
    return res.data;
  }
  async userupdate(payload: IRegisterRequest) {
    const res = await http.patch<IRegisterRequest>(`/user/update`, payload);
    return res.data;
  }
}

export const userService = new UserService();
