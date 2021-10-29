import { fishLogService } from './fishService';

async function ExportFishLogs(token: string) {
  const userToken = `Bearer ${token}`;
  const res = await fishLogService.get(`/fishLog/export`, {
    headers: { Authorization: userToken },
  });
  return res.data;
}

export { ExportFishLogs };
