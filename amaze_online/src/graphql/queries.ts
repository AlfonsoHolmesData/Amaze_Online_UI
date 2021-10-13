/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRunTimePlayer = /* GraphQL */ `
  query GetRunTimePlayer($username: String!) {
    getRunTimePlayer(username: $username) {
      username
      points
      is_navigator
      instruction
      avitar
    }
  }
`;
export const listRunTimePlayers = /* GraphQL */ `
  query ListRunTimePlayers(
    $filter: TableRunTimePlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRunTimePlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        username
        points
        is_navigator
        instruction
        avitar
      }
      nextToken
    }
  }
`;
export const getGameState = /* GraphQL */ `
  query GetGameState($has_navigator: Boolean!) {
    getGameState(has_navigator: $has_navigator) {
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
export const listGameStates = /* GraphQL */ `
  query ListGameStates(
    $filter: TableGameStateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: TableGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
