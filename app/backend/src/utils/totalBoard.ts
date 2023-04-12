const leaderBoard = `SELECT 
name,
SUM(totalPoints) AS totalPoints,
SUM(totalGames) AS totalGames,
SUM(totalVictories) AS totalVictories,
SUM(totalDraws) AS totalDraws,
SUM(totalLosses) AS totalLosses,
SUM(goalsFavor) AS goalsFavor,
SUM(goalsOwn) AS goalsOwn,
SUM(goalsBalance) AS goalsBalance,
ROUND(SUM(totalPoints) / (SUM(totalGames) * 3) * 100, 2) AS efficiency
FROM (
SELECT 
    te.team_name AS name,
    SUM(CASE
        WHEN ma.home_team_goals > ma.away_team_goals THEN 3
        WHEN ma.home_team_goals < ma.away_team_goals THEN 0
        ELSE 1 
    END) AS totalPoints,
    COUNT(*) AS totalGames,
    SUM(ma.home_team_goals > ma.away_team_goals) AS totalVictories,
    SUM(ma.home_team_goals = ma.away_team_goals) AS totalDraws,
    SUM(ma.home_team_goals < ma.away_team_goals) AS totalLosses,
    SUM(ma.home_team_goals) AS goalsFavor,
    SUM(ma.away_team_goals) AS goalsOwn,
    SUM(ma.home_team_goals) - SUM(ma.away_team_goals) AS goalsBalance
FROM
    TRYBE_FUTEBOL_CLUBE.teams AS te
    INNER JOIN
    TRYBE_FUTEBOL_CLUBE.matches AS ma ON te.id = ma.home_team_id
WHERE
    ma.in_progress = FALSE
GROUP BY name 

UNION ALL

SELECT 
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
    SUM(ma.away_team_goals) - SUM(ma.home_team_goals) AS goalsBalance
FROM
    TRYBE_FUTEBOL_CLUBE.teams AS te
    INNER JOIN
    TRYBE_FUTEBOL_CLUBE.matches AS ma ON te.id = ma.away_team_id
WHERE
    ma.in_progress = FALSE
GROUP BY name 
) AS subquery
GROUP BY name
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC;

`;

export default leaderBoard;
