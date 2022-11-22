import { LoggerService } from '../Logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  //The advantage of the spyOn is that you can call the original method
  it('should add two numbers  : Spyon demo', () => {
    const logger = new LoggerService(); // Here we create a new instance of logger service
    spyOn(logger, 'log');
    const calculator = new CalculatorService(logger);
    const result = calculator.add(2, 2);
    expect(result).toBe(4); // First exepct
    
    // Validate how many times the logger is being called
    expect(logger.log).toHaveBeenCalledTimes(1); // Check if the function is being called only once
});



  it('should add two numbers : createSpyObj demo', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    const calculator = new CalculatorService(mockLoggerService);
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });



  it('should subtract two numbers', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);

    let calculator = new CalculatorService(mockLoggerService);
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
