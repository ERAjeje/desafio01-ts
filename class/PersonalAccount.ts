import { DioAccount } from "./DioAccount"

export class PersonalAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  
  deposit = (value: number): boolean => {
    if(this.validateStatus()){
      this.balance += value + 10
      return true
    }

    return false
  }
}