import supabase from "../config/supabaseClient";

export const getAllPapers = async () => {
  const { data, error } = await supabase.from("question-paper").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export const getPaper = async (id: string) => {
    const { data, error } = await supabase
      .from("question-paper")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw new Error(error.message);
    return data;
  };
  