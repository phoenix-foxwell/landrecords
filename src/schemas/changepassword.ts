import { isContainSpace } from "@/utils/methods";
import {
  forward,
  minLength,
  object,
  regex,
  string,
} from "valibot";

const ChangepasswordSchema = pipe(
  object({
    password: pipe(
      string(),
      minLength(1, "Please enter your password."),
      minLength(8, "Your password must have 8 characters or more."),
      regex(/^(?=.*[0-9]).*$/, "Your password must have at least one number."),
      regex(
        /^(?=.*[!@#$%^&*]).*$/,
        "Your password must have at least one special character."
      ),
      regex(
        /^(?=.*[A-Z]).*$/,
        "Your password must have at least one uppercase."
      ),
      regex(
        /^(?=.*[a-z]).*$/,
        "Your password must have at least one lowercase."
      ),
      check(isContainSpace, "Password cannot contain space.")
    ),
    repassword: pipe(
      string(),
      minLength(1, "Please enter your re-password."),
      minLength(8, "Your re-password must have 8 characters or more."),
      regex(
        /^(?=.*[0-9]).*$/,
        "Your re-password must have at least one number."
      ),
      regex(
        /^(?=.*[!@#$%^&*]).*$/,
        "Your re-password must have at least one special character."
      ),
      regex(
        /^(?=.*[A-Z]).*$/,
        "Your re-password must have at least one uppercase."
      ),
      regex(
        /^(?=.*[a-z]).*$/,
        "Your re-password must have at least one lowercase."
      ),
      check(isContainSpace, "Re-password cannot contain space.")
    ),
  }),
  forward(
    check(
      (input) => input.password === input.repassword,
      "Password and Re-Password should be same."
    ),
    ["repassword"]
  )
);

type ChangePasswordForm = InferInput<typeof ChangepasswordSchema>;
export { ChangepasswordSchema, type ChangePasswordForm };
