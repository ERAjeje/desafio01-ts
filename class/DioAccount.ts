export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (value: number): void => {
    this.balance = value
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (value: number): boolean => {
    if(this.validateStatus()){
      this.balance += value
      return true
    }

    return false
  }

  withdraw = (value: number): boolean => {
    if(this.validateStatus() && this.balance >= value){
      this.balance -= value
      return true
    }

    return false
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
