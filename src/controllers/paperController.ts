import { Request, Response } from "express";
import { getAllPapers, getAllPapersByFacultyId, getPaper } from "../services/paperService";

export const getPapers = async (req: Request, res: Response) => {
  try {
    const questions = await getAllPapers();
    res.json(questions);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


export const getPaperByFacultyId = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const question = await getAllPapersByFacultyId(id);
    res.json(question);
  }
  catch( error: any){
    res.status(500).json({error:error.message})
  }
}

export const getPaperById = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const question = await getPaper(id);
    res.json(question);
  }
  catch( error: any){
    res.status(500).json({error:error.message})
  }
}