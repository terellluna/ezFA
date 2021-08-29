import { Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CashFlowStatement } from 'src/app/Models/cash-flow-statement.model';
import { StockService } from 'src/app/StockService/stock.service';

@Component({
  selector: 'app-cash-flows',
  templateUrl: './cash-flows.component.html',
  styleUrls: ['./cash-flows.component.css']
})
export class CashFlowsComponent implements AfterViewInit, OnChanges {

  @Input() symbol: string;
  loaded: boolean = false;
  displayedColumns: string[] = ['date', 'netIncome', 'depreciationAndAmortization', 'deferredIncomeTax', 'stockBasedCompensation', 'changeInWorkingCapital', 'accountsReceivables', 'inventory', 'accountsPayables', 'otherNonCashItems', 'netCashProvidedByOperatingActivities', 'investmentInPropertyPlantandEquipment', 'acquisitionsNet', 'purchasesOfInvestments', 'salesMaturitiesOfInvestments', 'netCashUsedForInvestingActivities', 'debtRepayment', 'commonStockIssued', 'commonStockRepurchased', 'dividendsPaid', 'netCashUsedProvidedByFinancingActivities', 'netChangeInCash', 'cashAtBeginningofPeriod', 'cashAtEndOfPeriod', 'operatingCashFlow', 'capitalExpenditure', 'freeCashFlow' ];
  dataSource: MatTableDataSource<CashFlowStatement>;
  cashFlowStatement: CashFlowStatement[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private stockService: StockService) { }
  
  ngOninit(){
    this.getCashFlowStatement();
  }

  ngOnChanges(){
    this.getCashFlowStatement();
  }

  ngAfterViewInit(): void {
    this.getCashFlowStatement();
    this.dataSource =  new MatTableDataSource(this.cashFlowStatement);
    this.dataSource.paginator = this.paginator;
  }

  getCashFlowStatement() {
    this.stockService.getCashFlowStatement(this.symbol).subscribe(data => {
      this.cashFlowStatement = data;
      this.cashFlowStatement = [...this.cashFlowStatement];
      this.dataSource = new MatTableDataSource(this.cashFlowStatement);
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
