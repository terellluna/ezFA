import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IncomeStatement } from '../Models/income-statement.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  cashFlowURL = 'https://financialmodelingprep.com/api/v3/cash-flow-statement/'
  incStatURL = 'https://financialmodelingprep.com/api/v3/income-statement/'
  balanceSheetURL = 'https://financialmodelingprep.com/api/v3/balance-sheet-statement/'
  dailyPricesURL = 'https://financialmodelingprep.com/api/v3/historical-price-full/'
  stockListURL = 'https://financialmodelingprep.com/api/v3/stock/list'
  keyRatioURL = 'https://financialmodelingprep.com/api/v3/key-metrics/'

  limit = 'limit=120&'
  key = 'apikey=1d6e68c8eb58cfff2cfd43480a62c133'

  constructor(private http: HttpClient) { }

  getIncomeStatement(symbol: string){
    return this.http.get<any>(this.incStatURL + symbol + '?' + this.limit + this.key);
  }

  getCashFlowStatement(symbol: string){
    return this.http.get<any>(this.cashFlowURL + symbol + '?' + this.limit + this.key);
  }

  getBalanceSheetStatement(symbol: string){
    return this.http.get<any>(this.balanceSheetURL + symbol + '?' + this.limit + this.key);
  }

  getDailyStockPrices(symbol: string){
    return this.http.get<any>(this.dailyPricesURL + symbol + '?' + this.key)
  }

  getStockList(){
    return this.http.get<any>(this.stockListURL + '?' + this.key)
  }

  getKeyRatios(symbol: string){
    return this.http.get<any>(this.keyRatioURL + symbol + '?' +this.limit + this.key);
  }
}

//http request will go here, the array to that will map to the request will go in a seperate class
