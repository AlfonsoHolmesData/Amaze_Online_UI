/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRunTimePlayer = /* GraphQL */ `
  subscription OnCreateRunTimePlayer(
    $username: String
    $points: Int
    $is_navigator: Boolean
    $instruction: String
    $avitar: String
  ) {
    onCreateRunTimePlayer(
      username: $username
      points: $points
      is_navigator: $is_navigator
      instruction: $instruction
      avitar: $avitar
    ) {
      username
      points
      is_navigator
      instruction
      avitar
    }
  }
`;
export const onUpdateRunTimePlayer = /* GraphQL */ `
  subscription OnUpdateRunTimePlayer(
    $username: String
    $points: Int
    $is_navigator: Boolean
    $instruction: String
    $avitar: String
  ) {
    onUpdateRunTimePlayer(
      username: $username
      points: $points
      is_navigator: $is_navigator
      instruction: $instruction
      avitar: $avitar
    ) {
      username
      points
      is_navigator
      instruction
      avitar
    }
  }
`;
export const onDeleteRunTimePlayer = /* GraphQL */ `
  subscription OnDeleteRunTimePlayer(
    $username: String
    $points: Int
    $is_navigator: Boolean
    $instruction: String
    $avitar: String
  ) {
    onDeleteRunTimePlayer(
      username: $username
      points: $points
      is_navigator: $is_navigator
      instruction: $instruction
      avitar: $avitar
    ) {
      username
      points
      is_navigator
      instruction
      avitar
    }
  }
`;
export const onCreateGameState = /* GraphQL */ `
  subscription OnCreateGameState(
    $has_navigator: Boolean
    $has_runner: Boolean
    $game_set: Boolean
    $is_completed: Boolean
    $destination: AWSJSON
  ) {
    onCreateGameState(
      has_navigator: $has_navigator
      has_runner: $has_runner
      game_set: $game_set
      is_completed: $is_completed
      destination: $destination
    ) {
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
export const onUpdateGameState = /* GraphQL */ `
  subscription OnUpdateGameState(
    $has_navigator: Boolean
    $has_runner: Boolean
    $game_set: Boolean
    $is_completed: Boolean
    $destination: AWSJSON
  ) {
    onUpdateGameState(
      has_navigator: $has_navigator
      has_runner: $has_runner
      game_set: $game_set
      is_completed: $is_completed
      destination: $destination
    ) {
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
export const onDeleteGameState = /* GraphQL */ `
  subscription OnDeleteGameState(
    $has_navigator: Boolean
    $has_runner: Boolean
    $game_set: Boolean
    $is_completed: Boolean
    $destination: AWSJSON
  ) {
    onDeleteGameState(
      has_navigator: $has_navigator
      has_runner: $has_runner
      game_set: $game_set
      is_completed: $is_completed
      destination: $destination
    ) {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame(
    $id: ID
    $has_navigator: Boolean
    $has_runner: Boolean
    $game_set: Boolean
    $is_active: Boolean
  ) {
    onCreateGame(
      id: $id
      has_navigator: $has_navigator
      has_runner: $has_runner
      game_set: $game_set
      is_active: $is_active
    ) {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame(
    $id: ID
    $has_navigator: Boolean
    $has_runner: Boolean
    $game_set: Boolean
    $is_active: Boolean
  ) {
    onUpdateGame(
      id: $id
      has_navigator: $has_navigator
      has_runner: $has_runner
      game_set: $game_set
      is_active: $is_active
    ) {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame(
    $id: ID
    $has_navigator: Boolean
    $has_runner: Boolean
    $game_set: Boolean
    $is_active: Boolean
  ) {
    onDeleteGame(
      id: $id
      has_navigator: $has_navigator
      has_runner: $has_runner
      game_set: $game_set
      is_active: $is_active
    ) {
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
