import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CategoryControllers{
    async create(request: Request, res: Response){
        const { name } = request.body;

        const category = await prismaClient.category.create({
            data:{
                name,
            }
        });

        return res.json(category);
    }
}
