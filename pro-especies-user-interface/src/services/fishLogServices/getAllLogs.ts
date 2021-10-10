import { fishLogService } from "./fishLogService";


async function GetAllFishLogs(
  fishLogId: string
    
) {
    const res = await fishLogService.get("/fishlog/");
    return res
}

export { GetAllFishLogs };