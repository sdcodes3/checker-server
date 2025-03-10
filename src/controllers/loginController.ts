import { Request, Response } from "express";
import { getFacultyLogin } from "../services/loginService";

export const getFaculty = async (req: Request, res: Response) => {
  try{
    const data = req.body;
    const response = await getFacultyLogin(data.id, data.password);
    res.json(response);
  }
  catch( error: any){
    res.status(500).json({error:error.message})
  }
}