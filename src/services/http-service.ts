import apiClient from "./api-client";

interface Entity {
  id: number;
}
class HttpService {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endPoint, {
      signal: controller.signal,
    });
    return { request, cancel: controller.abort };
  }

  create<T>(entity: T) {
    return apiClient.post<T>(this.endPoint, entity);
  }

  delete(id: number) {
    return apiClient.delete(this.endPoint + "/" + id);
  }
  update<T extends Entity>(newEntity: T) {
    return apiClient.patch(this.endPoint + "/" + newEntity.id, newEntity);
  }
}
const create = (endPoint: string) => new HttpService(endPoint);
export default create;
