const copy = async () => {
    try {
      await navigator.clipboard.writeText("amndbloom@gmail.com");
      alert("Email copiado!");
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }