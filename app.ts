import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PersonalAccount } from './class/PersonalAccount'

const companyAccount = new CompanyAccount('Edson', 123)
const peopleAccount = new PeopleAccount(123, 'Edson', 123)
const personalAccount = new PersonalAccount('Edson', 123)

const depositValue = 100
const withdrawValue = 100
const loanValue = 1000

console.log('Company balance: ', companyAccount.getBalance())
companyAccount.deposit(depositValue)
console.log('New Company balance: ', companyAccount.getBalance())

console.log('People balance: ', peopleAccount.getBalance())
peopleAccount.deposit(depositValue)
console.log('New People balance: ', peopleAccount.getBalance())

console.log('Personal balance: ', personalAccount.getBalance())
personalAccount.deposit(depositValue)
console.log('New Personal balance: ', personalAccount.getBalance(), '\n')

console.log('Company balance: ', companyAccount.getBalance())
companyAccount.withdraw(withdrawValue)
console.log('New Company balance: ', companyAccount.getBalance())

console.log('Company loan accepted: ', companyAccount.getLoan(loanValue))
console.log('Company balance: ', companyAccount.getBalance(), '\n')

console.log('Peaple balance: ', peopleAccount.getBalance())
peopleAccount.withdraw(withdrawValue)
console.log('New People balance: ', peopleAccount.getBalance())

console.log('Personal balance: ', personalAccount.getBalance())
personalAccount.withdraw(withdrawValue)
console.log('New Personal balance: ', personalAccount.getBalance(), '\n')

console.log('Company name: ', companyAccount.getName())
console.log('Peaple name: ', peopleAccount.getName())
console.log('Personal name: ', personalAccount.getName())
