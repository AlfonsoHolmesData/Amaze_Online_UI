/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRunTimePlayerInput = {
  username: string,
  points?: number | null,
  is_navigator?: boolean | null,
  instruction?: string | null,
  avitar?: string | null,
};

export type RunTimePlayer = {
  __typename: "RunTimePlayer",
  username?: string | null,
  points?: number | null,
  is_navigator?: boolean | null,
  instruction?: string | null,
  avitar?: string | null,
};

export type UpdateRunTimePlayerInput = {
  username: string,
  points?: number | null,
  is_navigator?: boolean | null,
  instruction?: string | null,
  avitar?: string | null,
};

export type DeleteRunTimePlayerInput = {
  username: string,
};

export type CreateGameStateInput = {
  has_navigator: boolean,
  has_runner?: boolean | null,
  game_set?: boolean | null,
  is_completed?: boolean | null,
  destination?: string | null,
  start_position?: string | null,
  runner_psotion?: string | null,
  game_map?: string | null,
  current_instruction?: string | null,
  match_time?: number | null,
};

export type GameState = {
  __typename: "GameState",
  navigator?: RunTimePlayer | null,
  runner?: RunTimePlayer | null,
  has_navigator?: boolean | null,
  has_runner?: boolean | null,
  game_set?: boolean | null,
  is_completed?: boolean | null,
  destination?: string | null,
  start_position?: string | null,
  runner_psotion?: string | null,
  game_map?: string | null,
  current_instruction?: string | null,
  match_time?: number | null,
};

export type UpdateGameStateInput = {
  has_navigator: boolean,
  has_runner?: boolean | null,
  game_set?: boolean | null,
  is_completed?: boolean | null,
  destination?: string | null,
  start_position?: string | null,
  runner_psotion?: string | null,
  game_map?: string | null,
  current_instruction?: string | null,
  match_time?: number | null,
};

export type DeleteGameStateInput = {
  has_navigator: boolean,
};

export type CreateGameInput = {
  has_navigator?: boolean | null,
  has_runner?: boolean | null,
  game_set?: boolean | null,
  is_active?: boolean | null,
  destination?: string | null,
  start_position?: string | null,
  runner_psotion?: string | null,
  game_map?: string | null,
  current_instruction?: string | null,
  match_time?: number | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  has_navigator?: boolean | null,
  has_runner?: boolean | null,
  game_set?: boolean | null,
  is_active?: boolean | null,
  destination?: string | null,
  start_position?: string | null,
  runner_psotion?: string | null,
  game_map?: string | null,
  current_instruction?: string | null,
  match_time?: number | null,
};

export type UpdateGameInput = {
  id: string,
  has_navigator?: boolean | null,
  has_runner?: boolean | null,
  game_set?: boolean | null,
  is_active?: boolean | null,
  destination?: string | null,
  start_position?: string | null,
  runner_psotion?: string | null,
  game_map?: string | null,
  current_instruction?: string | null,
  match_time?: number | null,
};

export type DeleteGameInput = {
  id: string,
};

export type TableRunTimePlayerFilterInput = {
  username?: TableStringFilterInput | null,
  points?: TableIntFilterInput | null,
  is_navigator?: TableBooleanFilterInput | null,
  instruction?: TableStringFilterInput | null,
  avitar?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type RunTimePlayerConnection = {
  __typename: "RunTimePlayerConnection",
  items?:  Array<RunTimePlayer | null > | null,
  nextToken?: string | null,
};

export type TableGameStateFilterInput = {
  has_navigator?: TableBooleanFilterInput | null,
  has_runner?: TableBooleanFilterInput | null,
  game_set?: TableBooleanFilterInput | null,
  is_completed?: TableBooleanFilterInput | null,
  current_instruction?: TableStringFilterInput | null,
  match_time?: TableIntFilterInput | null,
};

export type GameStateConnection = {
  __typename: "GameStateConnection",
  items?:  Array<GameState | null > | null,
  nextToken?: string | null,
};

export type TableGameFilterInput = {
  id?: TableIDFilterInput | null,
  has_navigator?: TableBooleanFilterInput | null,
  has_runner?: TableBooleanFilterInput | null,
  game_set?: TableBooleanFilterInput | null,
  is_active?: TableBooleanFilterInput | null,
  current_instruction?: TableStringFilterInput | null,
  match_time?: TableIntFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type GameConnection = {
  __typename: "GameConnection",
  items?:  Array<Game | null > | null,
  nextToken?: string | null,
};

export type CreateRunTimePlayerMutationVariables = {
  input: CreateRunTimePlayerInput,
};

export type CreateRunTimePlayerMutation = {
  createRunTimePlayer?:  {
    __typename: "RunTimePlayer",
    username?: string | null,
    points?: number | null,
    is_navigator?: boolean | null,
    instruction?: string | null,
    avitar?: string | null,
  } | null,
};

export type UpdateRunTimePlayerMutationVariables = {
  input: UpdateRunTimePlayerInput,
};

export type UpdateRunTimePlayerMutation = {
  updateRunTimePlayer?:  {
    __typename: "RunTimePlayer",
    username?: string | null,
    points?: number | null,
    is_navigator?: boolean | null,
    instruction?: string | null,
    avitar?: string | null,
  } | null,
};

export type DeleteRunTimePlayerMutationVariables = {
  input: DeleteRunTimePlayerInput,
};

export type DeleteRunTimePlayerMutation = {
  deleteRunTimePlayer?:  {
    __typename: "RunTimePlayer",
    username?: string | null,
    points?: number | null,
    is_navigator?: boolean | null,
    instruction?: string | null,
    avitar?: string | null,
  } | null,
};

export type CreateGameStateMutationVariables = {
  input: CreateGameStateInput,
};

export type CreateGameStateMutation = {
  createGameState?:  {
    __typename: "GameState",
    navigator?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    runner?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_completed?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type UpdateGameStateMutationVariables = {
  input: UpdateGameStateInput,
};

export type UpdateGameStateMutation = {
  updateGameState?:  {
    __typename: "GameState",
    navigator?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    runner?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_completed?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type DeleteGameStateMutationVariables = {
  input: DeleteGameStateInput,
};

export type DeleteGameStateMutation = {
  deleteGameState?:  {
    __typename: "GameState",
    navigator?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    runner?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_completed?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_active?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_active?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_active?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type GetRunTimePlayerQueryVariables = {
  username: string,
};

export type GetRunTimePlayerQuery = {
  getRunTimePlayer?:  {
    __typename: "RunTimePlayer",
    username?: string | null,
    points?: number | null,
    is_navigator?: boolean | null,
    instruction?: string | null,
    avitar?: string | null,
  } | null,
};

export type ListRunTimePlayersQueryVariables = {
  filter?: TableRunTimePlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRunTimePlayersQuery = {
  listRunTimePlayers?:  {
    __typename: "RunTimePlayerConnection",
    items?:  Array< {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGameStateQueryVariables = {
  has_navigator: boolean,
};

export type GetGameStateQuery = {
  getGameState?:  {
    __typename: "GameState",
    navigator?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    runner?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_completed?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type ListGameStatesQueryVariables = {
  filter?: TableGameStateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGameStatesQuery = {
  listGameStates?:  {
    __typename: "GameStateConnection",
    items?:  Array< {
      __typename: "GameState",
      navigator?:  {
        __typename: "RunTimePlayer",
        username?: string | null,
        points?: number | null,
        is_navigator?: boolean | null,
        instruction?: string | null,
        avitar?: string | null,
      } | null,
      runner?:  {
        __typename: "RunTimePlayer",
        username?: string | null,
        points?: number | null,
        is_navigator?: boolean | null,
        instruction?: string | null,
        avitar?: string | null,
      } | null,
      has_navigator?: boolean | null,
      has_runner?: boolean | null,
      game_set?: boolean | null,
      is_completed?: boolean | null,
      destination?: string | null,
      start_position?: string | null,
      runner_psotion?: string | null,
      game_map?: string | null,
      current_instruction?: string | null,
      match_time?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_active?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: TableGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "GameConnection",
    items?:  Array< {
      __typename: "Game",
      id: string,
      has_navigator?: boolean | null,
      has_runner?: boolean | null,
      game_set?: boolean | null,
      is_active?: boolean | null,
      destination?: string | null,
      start_position?: string | null,
      runner_psotion?: string | null,
      game_map?: string | null,
      current_instruction?: string | null,
      match_time?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRunTimePlayerSubscriptionVariables = {
  username?: string | null,
  points?: number | null,
  is_navigator?: boolean | null,
  instruction?: string | null,
  avitar?: string | null,
};

export type OnCreateRunTimePlayerSubscription = {
  onCreateRunTimePlayer?:  {
    __typename: "RunTimePlayer",
    username?: string | null,
    points?: number | null,
    is_navigator?: boolean | null,
    instruction?: string | null,
    avitar?: string | null,
  } | null,
};

export type OnUpdateRunTimePlayerSubscriptionVariables = {
  username?: string | null,
  points?: number | null,
  is_navigator?: boolean | null,
  instruction?: string | null,
  avitar?: string | null,
};

export type OnUpdateRunTimePlayerSubscription = {
  onUpdateRunTimePlayer?:  {
    __typename: "RunTimePlayer",
    username?: string | null,
    points?: number | null,
    is_navigator?: boolean | null,
    instruction?: string | null,
    avitar?: string | null,
  } | null,
};

export type OnDeleteRunTimePlayerSubscriptionVariables = {
  username?: string | null,
  points?: number | null,
  is_navigator?: boolean | null,
  instruction?: string | null,
  avitar?: string | null,
};

export type OnDeleteRunTimePlayerSubscription = {
  onDeleteRunTimePlayer?:  {
    __typename: "RunTimePlayer",
    username?: string | null,
    points?: number | null,
    is_navigator?: boolean | null,
    instruction?: string | null,
    avitar?: string | null,
  } | null,
};

export type OnCreateGameStateSubscriptionVariables = {
  has_navigator?: boolean | null,
  has_runner?: boolean | null,
  game_set?: boolean | null,
  is_completed?: boolean | null,
  destination?: string | null,
};

export type OnCreateGameStateSubscription = {
  onCreateGameState?:  {
    __typename: "GameState",
    navigator?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    runner?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_completed?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type OnUpdateGameStateSubscriptionVariables = {
  has_navigator?: boolean | null,
  has_runner?: boolean | null,
  game_set?: boolean | null,
  is_completed?: boolean | null,
  destination?: string | null,
};

export type OnUpdateGameStateSubscription = {
  onUpdateGameState?:  {
    __typename: "GameState",
    navigator?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    runner?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_completed?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type OnDeleteGameStateSubscriptionVariables = {
  has_navigator?: boolean | null,
  has_runner?: boolean | null,
  game_set?: boolean | null,
  is_completed?: boolean | null,
  destination?: string | null,
};

export type OnDeleteGameStateSubscription = {
  onDeleteGameState?:  {
    __typename: "GameState",
    navigator?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    runner?:  {
      __typename: "RunTimePlayer",
      username?: string | null,
      points?: number | null,
      is_navigator?: boolean | null,
      instruction?: string | null,
      avitar?: string | null,
    } | null,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_completed?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type OnCreateGameSubscriptionVariables = {
  id?: string | null,
  has_navigator?: boolean | null,
  has_runner?: boolean | null,
  game_set?: boolean | null,
  is_active?: boolean | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_active?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type OnUpdateGameSubscriptionVariables = {
  id?: string | null,
  has_navigator?: boolean | null,
  has_runner?: boolean | null,
  game_set?: boolean | null,
  is_active?: boolean | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_active?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};

export type OnDeleteGameSubscriptionVariables = {
  id?: string | null,
  has_navigator?: boolean | null,
  has_runner?: boolean | null,
  game_set?: boolean | null,
  is_active?: boolean | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    has_navigator?: boolean | null,
    has_runner?: boolean | null,
    game_set?: boolean | null,
    is_active?: boolean | null,
    destination?: string | null,
    start_position?: string | null,
    runner_psotion?: string | null,
    game_map?: string | null,
    current_instruction?: string | null,
    match_time?: number | null,
  } | null,
};
