import supabase from "../config/supabaseClient";
// import bcrypt from "bcryptjs"; // Ensure you install bcryptjs

export const getFacultyLogin = async (email: string, password: string) => {
  const { data, error } = await supabase
    .from("faculty") // Assuming "faculty" is the correct table name
    .select("*") // Select only necessary fields
    .eq("email", email)
    .maybeSingle();

  // Handle Supabase query error
  if (error) { // "PGRST116" -> No matching record found
    throw new Error(error.message);
  }

  // Handle case where no faculty is found
  if (!data) {
    throw new Error("Faculty not found");
  }

  // Compare hashed password
  // const isMatch = await bcrypt.compare(password, data.password);
  const isMatch = password === data.password;
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return data;
};
