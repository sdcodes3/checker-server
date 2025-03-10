import { Request, Response } from "express";
import { getFacultyLogin } from "../services/loginService";

export const getFaculty = async (req: Request, res: Response) => {
  try{
    const {id, password} = req.body;
    const response = await getFacultyLogin(id, password);
    res.json({...response,status:"success"});
  }
  catch( error: any){
    res.status(500).json({error:error.message})
  }
}