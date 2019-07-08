import { EliminationAlgorithmService } from './elimination-algorithm.service';

describe('EliminationAlgorithmService', () => {
  let service: EliminationAlgorithmService;

  beforeEach(() => {
    service = new EliminationAlgorithmService();
  });

  it('should throw error when not initialized', () => {
    expect(function() {
      service.getRemainingQuantityOfRounds();
    }).toThrowError("Service should be initialized first.");
  });

  it('should throw error when quantity is not positive', () => {
    let errorMessage = "Element quantity should be a positive number.";
    expect(() => service.initialize(-1)).toThrowError(errorMessage);
    expect(() => service.initialize(0)).toThrowError(errorMessage);
  });

  it('should return the correct quantity of rounds', () => {
    let testSet = [ 
      { input: 1, expected: 0},
      { input: 2, expected: 1},
      { input: 3, expected: 2},
      { input: 4, expected: 3},
      { input: 5, expected: 4}
    ];

    for (let i = 0; i < testSet.length; i++) {
      service.initialize(testSet[i].input);    
      expect(service.getRemainingQuantityOfRounds()).toBe(testSet[i].expected);
    }
  });
});