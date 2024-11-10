import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Calc';



  CalValue : number = 0;
  FunT: any="noFunction";

  callNumber: string = "noValue";

  firstNumber : number = 0;
  secondNumber : number = 0;

  onClickValue (val:string , type :any) {
    if (type == 'number') {
      this.onNumberClick(val);
    }
    else if (type =='function') {
      this.onFunctionClick(val);
    }
  }
    onNumberClick (val: string) {
      if(this.callNumber != 'noValue') {
        this.callNumber = this.callNumber + val;
      }
      else {
        this.callNumber= val;
      }

      this.CalValue = parseFloat(this.callNumber)
    }
  
    onFunctionClick(val :string){

      if (val =='c') {
        this.clearAll();
      }

      else if (this.FunT == 'noFunction') {
        this.firstNumber = this.CalValue;
        this.CalValue=0;
        this.callNumber = 'noValue';
        this.FunT = val;
      }
      else if (this.FunT != 'NoFunction') {
        this.secondNumber = this.CalValue;
        this.valueCalculate(val);
      }
    }


    valueCalculate (val : string) {
      if (this.FunT == '+'){
        const Total = this.firstNumber + this.secondNumber;
        this.totalAssignValues(Total, val);
        if (val == '=') {this.onEqualPress()}
      }
      if (this.FunT == '-'){
        const Total = this.firstNumber - this.secondNumber;
        this.totalAssignValues(Total, val);
        if (val == '=') {this.onEqualPress()}
      }
      if (this.FunT == '*'){
        const Total = this.firstNumber * this.secondNumber;
        this.totalAssignValues(Total, val);
        if (val == '=') {this.onEqualPress()}
      }
      if (this.FunT == '/'){
        const Total = this.firstNumber / this.secondNumber;
        this.totalAssignValues(Total, val);
        if (val == '=') {this.onEqualPress()}
      }
      if (this.FunT == '%'){
        const Total = this.firstNumber % this.secondNumber;
        this.totalAssignValues(Total, val);
        if (val == '=') {this.onEqualPress()}
      }
    }

    totalAssignValues (Total : number ,val : string){
      this.CalValue = Total; 
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.callNumber = 'noValue';
        this.FunT = val;
    }
    
    onEqualPress () {
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.FunT = 'noFunction';
      this.callNumber = 'noValue';
    }

    clearAll () {
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.callNumber = 'noValue';
      this.CalValue = 0;
      this.FunT = "noFunction";
    }

}