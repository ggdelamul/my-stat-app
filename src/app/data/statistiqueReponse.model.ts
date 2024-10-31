export class StatistiquesResponse {
  Moyenne: number;
  Variance: number;
  EcartType: number;

  constructor(moyenne: number, variance: number, ecartType: number) {
    this.Moyenne = moyenne;
    this.Variance = variance;
    this.EcartType = ecartType;
  }
}
