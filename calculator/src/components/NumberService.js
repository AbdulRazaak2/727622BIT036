const endpoints = {
    p: "primes",
    f: "fibo",
    e: "even",
    r: "rand",
  };
  
  const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ1MzA1NTQxLCJpYXQiOjE3NDUzMDUyNDEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVkNmJkNzczLTQ1MDEtNDdmNC05OGQ5LWI0NzAxYzkwNWNjNCIsInN1YiI6ImFiZHVscmF6YWFrMjIyMkBnbWFpbC5jb20ifSwiZW1haWwiOiJhYmR1bHJhemFhazIyMjJAZ21haWwuY29tIiwibmFtZSI6ImFiZHVsIHJhemFhayIsInJvbGxObyI6IjcyNzYyMmJpdDAzNiIsImFjY2Vzc0NvZGUiOiJqdEJ1enUiLCJjbGllbnRJRCI6IjVkNmJkNzczLTQ1MDEtNDdmNC05OGQ5LWI0NzAxYzkwNWNjNCIsImNsaWVudFNlY3JldCI6IlBqdkhmdlNOQ0JhVUpFVUQifQ.r5BlejvPp5dopgwEDMVmltjnO2MMmDRfIhXv-i-6M3E"; 
  
  let windowStore = [];
  
  export async function getNumbers(id) {
    const type = endpoints[id];
    if (!type) throw new Error("Invalid ID");
  
    const response = await fetch(`/evaluation-service/${type}`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`
      }
    });
  
    if (!response.ok) throw new Error("Failed to fetch numbers");
  
    const data = await response.json();
  
    const fetchedNumbers = data.numbers;
    const prevState = [...windowStore];
    const newUnique = fetchedNumbers.filter(n => !windowStore.includes(n));
    windowStore = [...windowStore, ...newUnique];
  
    if (windowStore.length > 10) {
      windowStore = windowStore.slice(windowStore.length - 10);
    }
  
    const avg =
      windowStore.length === 0
        ? 0
        : parseFloat(
            (windowStore.reduce((a, b) => a + b, 0) / windowStore.length).toFixed(2)
          );
  
    return {
      windowPrevState: prevState,
      windowCurrState: [...windowStore],
      numbers: fetchedNumbers,
      avg,
    };
  }
  