import prisma from '../../../../prisma/prisma';

export default async function deletePlant(req:any, res:any) {
    const result = await prisma.plant.deleteMany({
		where: {
            id: req.body.id,
        }
    });
    res.json(result);
}