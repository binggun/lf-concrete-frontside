import http from "@/http-common";
import { User, UserProperties } from "@/types/User.interface";
import FormData from "form-data";

class UserDataServices {
  getAll(): Promise<any> {
    return http.get("/api/user");
  }
  get(id: string): Promise<any> {
    return http.get(`/api/user/${id}`);
  }
  login(email: string, password: string): Promise<any> {
    return http.post("/login", { email: email, password: password });
  }
  newUser(user: UserProperties): Promise<any> {
    return http.post("/api/user/newuser", user);
  }
  editUser(user: User): Promise<any> {
    return http.post("/api/user/edituser", user);
  }
  removeUser(rowid: number): Promise<any> {
    return http.get(`api/user/removeUser/${rowid}`);
  }
}

export default new UserDataServices();
