"use server";

import { redirect } from "next/navigation";

type State = {
  errors: Record<string, string>;
};

export const action = (previousState: State, formData: FormData) => {
  const name = formData.get("name");

  if (name !== "John") return { errors: { name: "Enter 'John' to proceed" } };

  redirect("/");
};
