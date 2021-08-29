import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IncomeStatement } from 'src/app/Models/income-statement.model';
import { StockService } from 'src/app/StockService/stock.service';

@Component({
  selector: 'app-income-statement',
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.css']
})
export class IncomeStatementComponent implements AfterViewInit, OnChanges {

  @Input() symbol: string;
  loaded: boolean = false;
  displayedColumns: string[] = ['date', 'revenue', 'costOfRevenue', 'grossProfit', 'grossProfitRatio', 'researchAndDevelopmentExpenses', 'generalAndAdministrativeExpenses', 'sellingAndMarketingExpenses', 'operatingExpenses', 'operatingIncome', 'operatingIncomeRatio', 'interestExpense', 'netIncome', 'netIncomeRatio', 'eps', 'ebitda', 'ebitdaratio' ];
  dataSource: MatTableDataSource<IncomeStatement>;
  incomeStatement: IncomeStatement[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private stockService: StockService) {}

  ngOnChanges(){
    this.getIncomeStatement();
  }

  ngAfterViewInit() {
    this.getIncomeStatement();
    this.dataSource = new MatTableDataSource(this.incomeStatement);
    this.dataSource.paginator = this.paginator;
  }

  getIncomeStatement(){
    this.stockService.getIncomeStatement(this.symbol).subscribe(data => {
      this.incomeStatement = data;
      while(!this.incomeStatement){
        this.incomeStatement = [...this.incomeStatement];
      }
      this.dataSource = new MatTableDataSource(this.incomeStatement);
      this.loaded = true;
    });
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}