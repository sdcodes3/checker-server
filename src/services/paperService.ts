import supabase from "../config/supabaseClient";

export const getAllPapers = async () => {
  const { data, error } = await supabase.from("paper").select("*");
  if (error) throw new Error(error.message);
  return data;
};


export const getAllPapersByFacultyId = async (facultyId: string) => {
  const { data, error } = await supabase.from("paper").select("*").eq("allocated_to",facultyId);
  if (error) throw new Error(error.message);
  return data;
};

export const getPaper = async (id: string) => {
    const { data, error } = await supabase
      .from("paper")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw new Error(error.message);
    return data;
  };
  