import {Balance} from './balance.interface';

class BalanceService implements Balance {

capabilities;

status;

knownAccounts;

cancel(){

console.log('transaction has been cancelled');

console.log('transaction cancelled');

}

confirm(){

}

authorize(){

}

}