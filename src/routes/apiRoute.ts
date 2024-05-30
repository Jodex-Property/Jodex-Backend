import { Router } from "express";

import landlordRoute from "../Modules/landlord/route/route";
import tenantRoute from "../Modules/tenant/route/route";

const appRouter: Router = Router();

appRouter.use("/auth/landlord", landlordRoute);
appRouter.use("/auth/tenant", tenantRoute);
export default appRouter;