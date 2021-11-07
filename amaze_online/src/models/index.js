// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Match, Player, Position, Sticker } = initSchema(schema);

export {
  Match,
  Player,
  Position,
  Sticker
};