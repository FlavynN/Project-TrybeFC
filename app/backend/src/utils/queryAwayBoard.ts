const away = `SELECT 
te.team_name AS name,
SUM(CASE
WHEN ma.away_team_goals > ma.home_team_goals THEN 3
WHEN ma.away_team_goals < ma.home_team_goals THEN 0
ELSE 1 
END) AS totalPoints,
COUNT(*) AS totalGames,
SUM(ma.away_team_goals > ma.home_team_goals) AS totalVictories,
SUM(ma.away_team_goals = ma.home_team_goals) AS totalDraws,
SUM(ma.away_team_goals < ma.home_team_goals) AS totalLosses,
SUM(ma.away_team_goals) AS goalsFavor,
SUM(ma.home_team_goals) AS goalsOwn,
SUM(ma.away_team_goals) - SUM(ma.home_team_goals) AS goalsBalance,
ROUND(SUM(CASE
WHEN ma.away_team_goals > ma.home_team_goals THEN 3
WHEN ma.away_team_goals < ma.home_team_goals THEN 0
ELSE 1 
END) / (COUNT(*) * 3) *100, 2) AS efficiency
FROM
TRYBE_FUTEBOL_CLUBE.teams AS te
    INNER JOIN
TRYBE_FUTEBOL_CLUBE.matches AS ma ON te.id = ma.away_team_id
WHERE
ma.in_progress = FALSE
GROUP BY name 
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC;`;

export default away;
