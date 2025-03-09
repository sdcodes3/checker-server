import supabase from "../config/supabaseClient";

export const getAllQuestions = async () => {
  const { data, error } = await supabase.from("questions").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export const getQuestion = async (id: string) => {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const getAllQuestionsByPaperId = async (paper_id: string) => {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("paper_id", paper_id);

  if (error) throw new Error(error.message);
  return data;
};
