const attempts = 0
const completions = 0
const passingYards = 1 / 25
const touchdowns = 6
const interceptions = -3
const rushingYards = 1 / 10
const fumbles = -3
const receptions = 1
const receivingYards = 1 / 10
const returnYards = 1 / 15
const returns = 0
module.exports = calculateScore

function passingStats(passing) {
  let passingTotal = (passing.completions * completions)
    + (passing.yards * passingYards)
    + (passing.touchdowns * touchdowns)
    + (passing.interceptions * interceptions)
  return passingTotal
}

function rushingStats(rushing) {
  let rushingTotal = (rushing.attempts * attempts)
    + (rushing.yards * rushingYards)
    + (rushing.touchdowns * touchdowns)
    + (rushing.fumbles * fumbles)
  return rushingTotal
}

function receivingStats(receiving) {
  let receivingTotal = (receiving.receptions * receptions)
    + (receiving.yards * receivingYards)
    + (receiving.touchdowns * touchdowns)
    + (receiving.fumbles * fumbles)
  return receivingTotal
}

function kickreturnStats(kickreturn) {
  let kickreturnTotal = (kickreturn.returns * returns)
    + (kickreturn.yards * returnYards)
    + (kickreturn.touchdowns * touchdowns)
    + (kickreturn.fumbles * fumbles)
  return kickreturnTotal
}

function puntreturnStats(puntreturn) {
  let puntreturnTotal = (puntreturn.returns * returns)
    + (puntreturn.yards * returnYards)
    + (puntreturn.touchdowns * touchdowns)
    + (puntreturn.fumbles * fumbles)
  return puntreturnTotal
}

function calculateScore(player) {
  if (player.position === 'QB') {
    let score = passingStats(player.stats.passing)
      + rushingStats(player.stats.rushing)
    return score
  }
  else if (player.position === 'RB') {
    let score = rushingStats(player.stats.rushing)
      + receivingStats(player.stats.receiving)
      + kickreturnStats(player.stats.return.kickreturn)
      + puntreturnStats(player.stats.return.puntreturn)
    return score
  }
  else if (player.position === 'WR') {
    let score = rushingStats(player.stats.rushing)
      + receivingStats(player.stats.receiving)
      + kickreturnStats(player.stats.return.kickreturn)
      + puntreturnStats(player.stats.return.puntreturn)
    return score
  }
  else if (player.position === 'TE') {
    let score = receivingStats(player.stats.receiving)
    return score
  }
  else {
    let score = 0
    return score
  }
}

