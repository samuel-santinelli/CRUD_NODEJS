import { Request, Response } from 'express'
import { prismaClient} from '../database/prismaClient';

export class ProductControllers{
    async create(req:Request, res:Response){
        const { name, bar_code, price} = req.body

        const product = await prismaClient.product.create({
            data: {
                bar_code,
                name,
                price,
            }
        
        }) 
        if (!product){
            res.status(400).send({error: "nenhum produto encontrado"})
        }

        return res.json(product);

    }

    async findAll(req:Request, res:Response){
        
    
    }   

    async findById(req:Request, res:Response){
        
    }

    async delete(req:Request, res:Response){

    }

    async update(req:Request, res:Response){

    }

}



// Code JS funcional final de semana 
