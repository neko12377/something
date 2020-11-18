function caculateCompoundInterest(basicInvestmentValue, interestRate, mounths) {
    let copyOfBasicInvestmentValue = basicInvestmentValue;
    for (let i = 0; i <= mounths; i += 1) {
        copyOfBasicInvestmentValue *= (1 + interestRate);
        console.log(copyOfBasicInvestmentValue);
        copyOfBasicInvestmentValue += basicInvestmentValue;
    }
    console.log(copyOfBasicInvestmentValue / (basicInvestmentValue * mounths));
    return copyOfBasicInvestmentValue;
};
caculateCompoundInterest(20000, 0.005, 480);