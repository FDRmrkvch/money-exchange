module.exports = function makeExchange(currency) {

    let coins = {};
const money = {
    P: 1,
    N: 5,
    D: 10,
    Q: 25,
    H: 50,
};
    
        
    
        if (Math.floor(currency/money.H) > 0) {
            coins.H = Math.floor(currency/money.H);
            currency -= coins.H*money.H;
        }
    
        if (Math.floor(currency/money.Q) > 0) {
            coins.Q = Math.floor(currency/money.Q);
            currency -= coins.Q*money.Q;
        }
    
        if (Math.floor(currency/money.D) > 0) {
            coins.D = Math.floor(currency/money.D);
            currency -= coins.D*money.D;
        }
    
        if (Math.floor(currency/money.N) > 0) {
            coins.N = Math.floor(currency/money.N);
            currency -= coins.N*money.N;
        }
    
        if (Math.floor(currency/money.P) > 0) {
            coins.P = Math.floor(currency/money.P);
        }
    
        return coins;
    }
