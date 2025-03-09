import { Request, Response } from "express";
import { getAllPapers, getPaper } from "../services/paperService";

export const getPapers = async (req: Request, res: Response) => {
  try {
    const questions = await getAllPapers();
    res.json(questions);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const gePaperById = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const question = await getPaper(id);
    res.json(question);
  }
  catch( error: any){
    res.status(500).json({error:error.message})
  }
}