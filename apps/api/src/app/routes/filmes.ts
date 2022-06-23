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

router.get('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const filme: IFilme = await getCollection<IFilme>(
    req.app,
    'filmes',
  ).findOne({
    _id: _id,
  });
  res.json(filme);
});

router.put('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const body: IFilme = req.body;
  const results = await getCollection<IFilme>(
    req.app,
    'filmes',
  ).findOneAndReplace({
    _id: _id,
  }, body);
  res.json(results);
});
