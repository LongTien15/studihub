'use server'

import { signIn, signOut } from "~/auth";

// export async function doSocialLogin(formData) {
//     const action = formData.get('action');
//     await signIn(action, { redirectTo: "/home" });
// }

export async function logout() {
  await signOut({ redirectTo: "/" });
}

// export async function signInByCredentials(formData) {

//   try {
//     const response = await signIn("credentials", {
//       email: formData.get("email"),
//       password: formData.get("password"),
//       redirect: false,
//     });
//     return response;
//   } catch (err) {
//     throw err;
//   }
// }