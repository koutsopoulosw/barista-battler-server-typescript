import express, { Express, Request, Response, Router } from "express";

// Example Middleware - will expound on this later if needed for Auth, etc
const router: Router = express.Router({ mergeParams: true });
const testMiddlewareFunction = (req: Request, res: Response, next: Function) => {
  console.log("I'm Middleware!");
  next();
}
router.use(testMiddlewareFunction);

router.get('/', (req: Request, res: Response) => {
  res.send('Middleware Home Page')
})

export default router;