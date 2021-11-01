import { fishLogService } from './fishService';

async function ExportFishLogs(token: string, exportList: Array<string>) {
  const userToken = `Bearer ${token}`;
  const res = await fishLogService.get(`/fishLog/export`, {
    headers: { Authorization: userToken },
    params: { body:  exportList },
  });
  return res.data;
}

export { ExportFishLogs };
