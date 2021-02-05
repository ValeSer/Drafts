const getData = async () => {
    try {
      const response = await
      fetch('https://api-to-call.com/endpoint');
      if (response.ok) {
        const jsonResponse = await response.json()
      }
    } catch(error) {
      console.log(error);
    }
  };
  