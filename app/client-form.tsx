"use client";

import { useActionState } from "react";
import { action } from "./action";

export const ClientForm = () => {
  const [{ errors }, dispatch] = useActionState(action, { errors: {} });

  return (
    <form action={dispatch}>
      <p>
        I'm providing default value to `useActionState` invocation but if you
        submit this function correctly and get redirected here you'll get JS
        fail trying to destructure state at line 7, because actionState is
        actually undefined
      </p>
      <input type="text" name="name" />
      <button>Submit</button>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
    </form>
  );
};
