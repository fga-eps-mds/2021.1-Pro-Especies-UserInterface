import fishLogService from "./fishService"

export const createFishLog = async (
    photo: string | null | undefined,
    name: string | null,
    largeGroup: string | null,
    group: string | null,
    species: string | null,
    weight: number | null,
    lenght: number | null,
    coordenates: number | null,
) => {
    const userId = "";
    await fishLogService.post('/fishLog', {
        userId,
        name,
        largeGroup,
        group,
        species,
        coordenates,
        photo,
        length,
        weight,
    })
}