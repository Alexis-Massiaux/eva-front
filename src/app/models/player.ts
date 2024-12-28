export class Player {

  pseudo: string;
  seasonPass: boolean;
  level: string;
  gameNumber: number;
  wins: number;
  defeats: number;
  ties: number;
  gameTime: string;
  kills: number;
  deaths: number;
  supports: number;
  percentKills: number;
  killsForDeaths: number;
  distance: number;
  averageDistance: number;
  maxSeriesKills: number;
  maxDamage: number;
  totalDamage: number;

  constructor(pseudo: string, seasonPass: boolean, level: string, gameNumber: number,
              wins: number, defeats: number, ties: number, gameTime: string,
              kills: number, deaths: number, supports: number, percentKills: number,
              killsForDeaths: number, distance: number, averageDistance: number,
              maxSeriesKills: number, maxDamage: number, totalDamage: number) {

    this.pseudo = pseudo;
    this.seasonPass = seasonPass;
    this.level = level;
    this.gameNumber = gameNumber;
    this.wins = wins;
    this.defeats = defeats;
    this.ties = ties;
    this.gameTime = gameTime;
    this.kills = kills;
    this.deaths = deaths;
    this.supports = supports;
    this.percentKills = percentKills;
    this.killsForDeaths = killsForDeaths;
    this.distance = distance;
    this.averageDistance = averageDistance;
    this.maxSeriesKills = maxSeriesKills;
    this.maxDamage = maxDamage;
    this.totalDamage = totalDamage;
  }

}
