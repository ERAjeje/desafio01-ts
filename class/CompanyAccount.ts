import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  
  getLoan = (value: number): boolean => {
    if(this.validateStatus()){
      const balance = this.getBalance()
      this.setBalance(balance + value)
      return true
    }

    return false
  }
}
