import request from "../request";
import { attachmentPrefix } from "../path";
export const fileDownload = (fileId: string) => {
  return request.get(`${attachmentPrefix}/download/${fileId}`, {
    responseType: "blob",
    headers: {
      fullRes: true,
    },
  });
};
