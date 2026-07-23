import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Ne s'applique pas aux fichiers statiques, aux assets Next.js ni a l'API.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
