import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  num1=13;
  num2=10;
  sum={};
  dif={};
  mult={};
  quo={};
  modulo={};
  fact1=1;
  fact2=1;
  flag1=0;
  flag2=0;
  check={};
  add()
  {
    this.check=0;
    this.sum=this.num1+this.num2;
  }
  sub()
  {
    this.check=1;
    if(this.num1>this.num2)
    {
      this.dif=this.num1-this.num2;
    }
    else
    {
      this.dif=this.num2-this.num1;  
    }
  }
  mul()
  {
    this.check=2;
    this.mult=this.num1*this.num2;
  }
  divi()
  {
    this.check=3;
    this.quo=this.num1/this.num2;
  }
  modu()
  {
    this.check=4;
    this.modulo=this.num1%this.num2;
  }
  facto()
  {
    this.check=5;
    for(let i=0;i<=this.num1;i++)
    {
        if(i==0)
        {
          this.fact1*=1;
        }
        else if(i==1)
        {
          this.fact1*=1;
        }
        else
        {
          this.fact1*=i;
        }
    }
    for(let i=0;i<=this.num2;i++)
    {
        if(i==0)
        {
          this.fact2*=1;
        }
        else if(i==1)
        {
          this.fact2*=1;
        }
        else
        {
          this.fact2*=i;
        }
    }
  }
  primenum()
  {
    this.check=6;
    for(let i=2;i<this.num1;i++)
    {
      if(this.num1%i==0)
      {
        this.flag1=1;
        break;
      }
    }
    for(let i=2;i<this.num2;i++)
    {
      if(this.num2%i==0)
      {
        this.flag2=1;
        break;
      }
    }
  }
}