import { fishLogService } from "./fishService";


async function DeleteFishLog(
  token: string,
  logId: string,
) {
  const userToken = `Bearer ${token}`;
  const res = await fishLogService.delete(`/fishLog/${logId}`, { headers: { Authorization: userToken } });
  return res.data;
}

export { DeleteFishLog };