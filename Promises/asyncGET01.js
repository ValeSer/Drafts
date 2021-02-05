const getData = async () => {
    try {
      const response = await
      fetch('https://api-to-call.com/endpoint');
      if (response.ok) {
        
      }
    } catch(error) {
      console.log(error);
    }
  };
  