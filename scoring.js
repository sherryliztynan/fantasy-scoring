function qbScoring(qbStats) {
  let passingYardScore = qbStats.passing.yards / 25
  let passingTouchdownScore = qbStats.passing.touchdowns * 6
  let interceptionScore = qbStats.passing.interceptions * -3
  let rushingYardScore = qbStats.rushing.yards / 10
  let rushingTouchdownScore = qbStats.rushing.touchdowns * 6
  let rushingFumbleScore = qbStats.rushing.fumbles * -3

  return passingYardScore + passingTouchdownScore + interceptionScore + rushingYardScore + rushingTouchdownScore + rushingFumbleScore
}

function rbScoring(rbStats) {
  let rushingYardScore = rbStats.rushing.yards / 10
  let rushingTouchdownScore = rbStats.rushing.touchdowns * 6
  let rushingFumbleScore = rbStats.rushing.fumbles * -3
  let receivingReceptionsScore = rbStats.receiving.receptions * 1
  let receivingYardScore = rbStats.receiving.yards / 10
  let receivingTouchdownScore = rbStats.receiving.touchdowns * 6
  let receivingFumbleScore = rbStats.receiving.fumbles * -3
  let kickreturnYardScore = rbStats.return.kickreturn.yards / 10
  let kickreturnTouchdownScore = rbStats.return.kickreturn.touchdowns * 6
  let kickreturnFumbleScore = rbStats.return.kickreturn.fumbles * -3
  let puntreturnYardScore = rbStats.return.puntreturn.yards / 15
  let puntreturnTouchdownScore = rbStats.return.puntreturn.touchdowns * 6
  let puntreturnFumbleScore = rbStats.return.puntreturn.fumbles * -3

  return rushingYardScore + rushingTouchdownScore + rushingFumbleScore + receivingReceptionsScore + receivingYardScore + receivingTouchdownScore + receivingFumbleScore + kickreturnYardScore + kickreturnTouchdownScore + kickreturnFumbleScore + puntreturnYardScore + puntreturnTouchdownScore + puntreturnFumbleScore
}

function wrScoring(wrStats) {
  let rushingYardScore = wrStats.rushing.yards / 10
  let rushingTouchdownScore = wrStats.rushing.touchdowns * 6
  let rushingFumbleScore = wrStats.rushing.fumbles * -3
  let receivingReceptionsScore = wrStats.receiving.receptions * 1
  let receivingYardScore = wrStats.receiving.yards / 10
  let receivingTouchdownScore = wrStats.receiving.touchdowns * 6
  let receivingFumbleScore = wrStats.receiving.fumbles * -3
  let kickreturnYardScore = wrStats.return.kickreturn.yards / 15
  let kickreturnTouchdownScore = wrStats.return.kickreturn.touchdowns * 6
  let kickreturnFumbleScore = wrStats.return.kickreturn.fumbles * -3
  let puntreturnYardScore = wrStats.return.puntreturn.yards / 15
  let puntreturnTouchdownScore = wrStats.return.puntreturn.touchdowns * 6
  let puntreturnFumbleScore = wrStats.return.puntreturn.fumbles * -3

  return rushingYardScore + rushingTouchdownScore + rushingFumbleScore + receivingReceptionsScore + receivingYardScore + receivingTouchdownScore + receivingFumbleScore + kickreturnYardScore + kickreturnTouchdownScore + kickreturnFumbleScore + puntreturnYardScore + puntreturnTouchdownScore + puntreturnFumbleScore
}

function teScoring(teStats) {
  let receivingReceptionsScore = teStats.receiving.receptions * 1
  let receivingYardScore = teStats.receiving.yards / 10
  let receivingTouchdownScore = teStats.receiving.touchdowns * 6
  let receivingFumbleScore = teStats.receiving.fumbles * -3

  return receivingReceptionsScore + receivingYardScore + receivingTouchdownScore + receivingFumbleScore
}
function checkPosition(player) { 
  if (player.position === 'QB') {
    return qbScoring(player.stats)
  }
  else if (player.position === 'RB') {
    return rbScoring(player.stats)
  }
  else if (player.position === 'WR') {
    return wrScoring(player.stats)
  }
  else if (player.position === 'TE') {
    return teScoring(player.stats)
  }
  else return 0
}
function calculateScore(player) {
  let score = checkPosition(player)

  return score
}


module.exports = calculateScore
