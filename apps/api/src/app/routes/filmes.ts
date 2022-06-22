import {
  NextFunction,
  Response,
  Request,
  Router,
} from "express";

import {
  Filme as IFilme,
} from '@cefwm-angular/common';
import { getCollection } from "../util/mongodb";

export const router: Router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const filmes: IFilme[] = await getCollection<IFilme>(
    req.app,
    'filmes',
  ).find().toArray();
  res.json(filmes);
});
