import prisma from '../../../../prisma/prisma';

export default async function editPlant(req:any, res:any) {
    const result = await prisma.plant.update({
		where: {
            id: req.body.plantId,
        },
		data: {
			name: req.body.name,
			type: req.body.type,
			health: req.body.health,
			waterFreq: req.body.waterFreq
		}
    });
    res.json(result);
}