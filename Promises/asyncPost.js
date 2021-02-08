const getData = async () => {
    try {
      const response = await fetch('https://api-to-call.com/endpoint', {});
    }
    catch(error) {
      console.log(error);
    }
  }