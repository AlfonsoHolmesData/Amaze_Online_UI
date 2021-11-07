import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MatchMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PositionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StickerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Match {
  readonly id: string;
  readonly name?: string;
  readonly matchTime?: number;
  readonly closed?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Match, MatchMetaData>);
  static copyOf(source: Match, mutator: (draft: MutableModel<Match, MatchMetaData>) => MutableModel<Match, MatchMetaData> | void): Match;
}

export declare class Player {
  readonly id: string;
  readonly username?: string;
  readonly color?: string;
  readonly points?: number;
  readonly isDead?: boolean;
  readonly isHost?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Player, PlayerMetaData>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player, PlayerMetaData>) => MutableModel<Player, PlayerMetaData> | void): Player;
}

export declare class Position {
  readonly id: string;
  readonly x?: number;
  readonly y?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Position, PositionMetaData>);
  static copyOf(source: Position, mutator: (draft: MutableModel<Position, PositionMetaData>) => MutableModel<Position, PositionMetaData> | void): Position;
}

export declare class Sticker {
  readonly id: string;
  readonly image?: string;
  readonly width_percentage?: number;
  readonly height_percentage?: number;
  readonly position_type?: string;
  readonly visited?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Sticker, StickerMetaData>);
  static copyOf(source: Sticker, mutator: (draft: MutableModel<Sticker, StickerMetaData>) => MutableModel<Sticker, StickerMetaData> | void): Sticker;
}