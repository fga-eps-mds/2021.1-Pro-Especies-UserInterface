import { fishLogService } from "./fishLogService";


async function GetAllFishLogs(
  token: string,
    
) {
  const userToken = `Bearer ${token}`;
  const res = await fishLogService.get(`/fishLog/`, { headers: { Authorization: userToken } });
  return res.data;
}

export { GetAllFishLogs };