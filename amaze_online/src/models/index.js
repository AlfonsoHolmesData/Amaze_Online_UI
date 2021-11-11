// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Match, Position, Sticker, Player } = initSchema(schema);

export {
  Match,
  Position,
  Sticker,
  Player
};