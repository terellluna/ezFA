import { AfterViewInit, Component, Inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BalanceSheetStatement } from 'src/app/Models/balance-sheet-statement.model';
import { StockService } from 'src/app/StockService/stock.service';

@Component({
  selector: 'app-balance-sheet',
  templateUrl: './balance-sheet.component.html',
  styleUrls: ['./balance-sheet.component.css']
})
export class BalanceSheetComponent implements OnInit {

  @Input() symbol: string;
  loaded: boolean = false;
  displayedColumns: string[] = ['date', 'cashAndCashEquivalents', 'shortTermInvestments', 'cashAndShortTermInvestments', 'netReceivables', 'inventory', 'otherCurrentAssets', 'totalCurrentAssets', 'propertyPlantEquipmentNet', 'goodwill', 'intangibleAssets', 'goodwillAndIntangibleAssets', 'longTermInvestments', 'taxAssets', 'otherNonCurrentAssets', 'totalNonCurrentAssets', 'otherAssets', 'totalAssets', 'accountPayables', 'shortTermDebt', 'taxPayables', 'deferredRevenue', 'otherCurrentLiabilities', 'totalCurrentLiabilities', 'longTermDebt', 'deferredRevenueNonCurrent', 'deferredTaxLiabilitiesNonCurrent', 'otherNonCurrentLiabilities', 'totalNonCurrentLiabilities', 'otherLiabilities', 'totalLiabilities', 'commonStock', 'retainedEarnings', 'accumulatedOtherComprehensiveIncomeLoss', 'othertotalStockholdersEquity', 'totalStockholdersEquity', 'totalLiabilitiesAndStockholdersEquity', 'totalInvestments', 'totalDebt', 'netDebt' ];
  dataSource: MatTableDataSource<BalanceSheetStatement>;
  balanceSheetStatement: BalanceSheetStatement[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private stockService: StockService,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(){
    this.symbol = this.data.symbol;
    this.getBalanceSheetStatement();
    this.dataSource = new MatTableDataSource(this.balanceSheetStatement);
    this.dataSource.paginator = this.paginator;
  }

  getBalanceSheetStatement() {
    this.stockService.getBalanceSheetStatement(this.symbol).subscribe(data => {
      this.balanceSheetStatement = data;
      while(!this.balanceSheetStatement){
        this.balanceSheetStatement = [...this.balanceSheetStatement];
      }
      this.dataSource = new MatTableDataSource(this.balanceSheetStatement);
      this.loaded = true;
    })
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
}
