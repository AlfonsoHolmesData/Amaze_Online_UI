/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRunTimePlayer = /* GraphQL */ `
  mutation CreateRunTimePlayer($input: CreateRunTimePlayerInput!) {
    createRunTimePlayer(input: $input) {
      username
      points
      is_navigator
      instruction
      avitar
    }
  }
`;
export const updateRunTimePlayer = /* GraphQL */ `
  mutation UpdateRunTimePlayer($input: UpdateRunTimePlayerInput!) {
    updateRunTimePlayer(input: $input) {
      username
      points
      is_navigator
      instruction
      avitar
    }
  }
`;
export const deleteRunTimePlayer = /* GraphQL */ `
  mutation DeleteRunTimePlayer($input: DeleteRunTimePlayerInput!) {
    deleteRunTimePlayer(input: $input) {
      username
      points
      is_navigator
      instruction
      avitar
    }
  }
`;
export const createGameState = /* GraphQL */ `
  mutation CreateGameState($input: CreateGameStateInput!) {
    createGameState(input: $input) {
      navigator {
        username
        points
        is_navigator
        instruction
        avitar
      }
      runner {
        username
        points
        is_navigator
        instruction
        avitar
      }
      has_navigator
      has_runner
      game_set
      is_completed
      destination
      start_position
      runner_psotion
      game_map
      current_instruction
      match_time
    }
  }
`;
export const updateGameState = /* GraphQL */ `
  mutation UpdateGameState($input: UpdateGameStateInput!) {
    updateGameState(input: $input) {
      navigator {
        username
        points
        is_navigator
        instruction
        avitar
      }
      runner {
        username
        points
        is_navigator
        instruction
        avitar
      }
      has_navigator
      has_runner
      game_set
      is_completed
      destination
      start_position
      runner_psotion
      game_map
      current_instruction
      match_time
    }
  }
`;
export const deleteGameState = /* GraphQL */ `
  mutation DeleteGameState($input: DeleteGameStateInput!) {
    deleteGameState(input: $input) {
      navigator {
        username
        points
        is_navigator
        instruction
        avitar
      }
      runner {
        username
        points
        is_navigator
        instruction
        avitar
      }
      has_navigator
      has_runner
      game_set
      is_completed
      destination
      start_position
      runner_psotion
      game_map
      current_instruction
      match_time
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame($input: CreateGameInput!) {
    createGame(input: $input) {
      id
      has_navigator
      has_runner
      game_set
      is_active
      destination
      start_position
      runner_psotion
      game_map
      current_instruction
      match_time
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame($input: UpdateGameInput!) {
    updateGame(input: $input) {
      id
      has_navigator
      has_runner
      game_set
      is_active
      destination
      start_position
      runner_psotion
      game_map
      current_instruction
      match_time
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame($input: DeleteGameInput!) {
    deleteGame(input: $input) {
      id
      has_navigator
      has_runner
      game_set
      is_active
      destination
      start_position
      runner_psotion
      game_map
      current_instruction
      match_time
    }
  }
`;
