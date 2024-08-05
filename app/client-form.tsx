"use client";

import { useActionState } from "react";
import { action } from "./action";

export const ClientForm = () => {
  const [{ errors }, dispatch] = useActionState(action, { errors: {} });

  return (
    <form action={dispatch}>
      <input type="text" name="name" />
      <button>Submit</button>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
    </form>
  );
};
