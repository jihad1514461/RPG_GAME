// Fibonacci XP calculation
export const calculateXPThreshold = (level: number): number => {
  const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  };
  return fibonacci(level) * 10;
};

export const rollDice = (hasAdvantage: boolean = false): number => {
  return hasAdvantage 
    ? Math.floor(Math.random() * 3) + 4  // 4-6
    : Math.floor(Math.random() * 6) + 1; // 1-6
};