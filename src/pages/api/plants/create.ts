import prisma from '../../../../prisma/prisma';

export default async function createPlant(req:any, res:any) {
    let { name, type, health, waterFreq} = req.body;
    const result = await prisma.plant.create({
        data: {
			name: name,
			type: type,
			health: health,
			waterFreq: waterFreq,
		}
    });
    res.json(result);
}