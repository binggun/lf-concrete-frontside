import http from "@/http-common";
import { Concrete } from "@/types/Concrete.interface";

class ConcreteDataService {
  getAll(): Promise<any> {
    return http.get("/api/concrete");
  }
  get(id: string): Promise<any> {
    return http.get(`/api/concrete/${id}`);
  }
}
export default new ConcreteDataService();
