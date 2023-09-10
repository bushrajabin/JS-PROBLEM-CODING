function fibonacci(n) {
    const sequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
      const next = sequence[i - 1] + sequence[i - 2];
      sequence.push(next);
    }
    
    return sequence;
  }

  const result=fibonacci(100);
  console.log(result);