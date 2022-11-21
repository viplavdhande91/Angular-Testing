import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    const calculator = new CalculatorService();
    //fail
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
  });

  it('should subtract two numbers', () => {
    let calculator = new CalculatorService();
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
  });

  it('should be in pending state', () => {
    pending()     //if inserted without any code it displays as pending
  });

  
  it('should always fail', () => {
    fail()     //if inserted without any code it always fail
  });

  xit('should always disabled', () => {
    fail()     //if inserted without any code it always fails
  });
});
