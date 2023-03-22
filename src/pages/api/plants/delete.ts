import prisma from '../../../../prisma/prisma';

export default async function deletePlant(req:any, res:any) {
    const result = await prisma.plant.delete({
		where: {
            id: req.query.id,
        }
    });
    res.json(result);
}