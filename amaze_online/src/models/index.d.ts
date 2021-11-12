import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Position {
  readonly x?: number;
  readonly y?: number;
  constructor(init: ModelInit<Position>);
}

export declare class Sticker {
  readonly position?: Position;
  readonly image?: string;
  readonly width_percentage?: number;
  readonly height_percentage?: number;
  readonly position_type?: string;
  readonly visited?: boolean;
  constructor(init: ModelInit<Sticker>);
}

export declare class Player {
  readonly username?: string;
  readonly color?: string;
  readonly location?: Position;
  readonly points?: number;
  readonly isDead?: boolean;
  readonly isHost?: boolean;
  constructor(init: ModelInit<Player>);
}

type MatchMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Match {
  readonly id: string;
  readonly name?: string;
  readonly host?: Player;
  readonly player1?: Player;
  readonly player2?: Player;
  readonly matchTime?: number;
  readonly gameMap: (Sticker | null)[];
  readonly closed?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Match, MatchMetaData>);
  static copyOf(source: Match, mutator: (draft: MutableModel<Match, MatchMetaData>) => MutableModel<Match, MatchMetaData> | void): Match;
}