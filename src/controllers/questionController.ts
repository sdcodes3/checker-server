import { Request, Response } from "express";
import { getAllQuestions, getAllQuestionsByPaperId, getQuestion } from "../services/questionService";

export const getQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await getAllQuestions();
    res.json(questions);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getQuestionsById = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const question = await getQuestion(id);
    res.json(question);
  }
  catch( error: any){
    res.status(500).json({error:error.message})
  }
}

export const getQuestionsByPaperId = async (req: Request, res: Response) => {
  try{
    const { id } = req.params;
    const question = await getAllQuestionsByPaperId(id);
    res.json(question);
  }
  catch( error: any){
    res.status(500).json({error:error.message})
  }
}