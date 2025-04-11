import { userAuth } from "@/stores/auth.js";

export default async function route(to, from, next){
  if(to.meta?.auth){
    const auth = userAuth();

    if(auth.token){
      const isValid = await auth.checkTokenAuth();
      if(isValid){
        next();
      } else {
        auth.logout();
        next({ name: 'login' });
      }
    } else {
      next({ name: 'login' });
    }
  } else {
    next();
  }
}