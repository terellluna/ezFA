import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { KeyRatios } from 'src/app/Models/key-ratios.model';
import { StockService } from 'src/app/StockService/stock.service';

@Component({
  selector: 'app-key-ratios',
  templateUrl: './key-ratios.component.html',
  styleUrls: ['./key-ratios.component.css']
})
export class KeyRatiosComponent implements OnInit {

  @Input() symbol: string;
  loaded: boolean = false;
  displayedColumns: string[] = ['date', 'revenuePerShare', 'netIncomePerShare', 'operatingCashFlowPerShare', 'freeCashFlowPerShare', 'cashPerShare', 'bookValuePerShare', 'tangibleBookValuePerShare', 'shareholdersEquityPerShare', 'interestDebtPerShare', 'marketCap', 'enterpriseValue', 'peRatio', 'priceToSalesRatio', 'pocfratio', 'pfcfRatio', 'pbRatio', 'ptbRatio', 'evToSales', 'enterpriseValueOverEBITDA', 'evToOperatingCashFlow', 'evToFreeCashFlow', 'earningsYield', 'freeCashFlowYield', 'debtToEquity', 'debtToAssets', 'netDebtToEBITDA', 'currentRatio', 'interestCoverage', 'incomeQuality', 'dividendYield', 'payoutRatio', 'salesGeneralAndAdministrativeToRevenue', 'researchAndDdevelopementToRevenue', 'intangiblesToTotalAssets', 'capexToOperatingCashFlow', 'capexToRevenue', 'capexToDepreciation', 'stockBasedCompensationToRevenue', 'grahamNumber', 'roic', 'returnOnTangibleAssets', 'grahamNetNet', 'workingCapital', 'tangibleAssetValue', 'netCurrentAssetValue', 'investedCapital', 'averageReceivables', 'averagePayables', 'averageInventory', 'daysSalesOutstanding', 'daysPayablesOutstanding', 'daysOfInventoryOnHand', 'receivablesTurnover', 'payablesTurnover', 'inventoryTurnover', 'roe', 'capexPerShare'];
  dataSource: MatTableDataSource<KeyRatios>;
  keyRatios: KeyRatios[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private stockService: StockService, @Inject(MAT_DIALOG_DATA) public data : any) {}

  ngOnInit(): void {
    this.symbol = this.data.symbol;
    this.getKeyRatios();
    this.dataSource = new MatTableDataSource(this.keyRatios);
    this.dataSource.paginator = this.paginator;
  }

  getKeyRatios(){
    this.stockService.getKeyRatios(this.symbol).subscribe(data => {
      console.log(data);
      this.keyRatios = data;
      console.log(this.keyRatios);
      while(!this.keyRatios){
        this.keyRatios = [...this.keyRatios];
      }
      this.dataSource = new MatTableDataSource(this.keyRatios);
      this.loaded = true;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
}
