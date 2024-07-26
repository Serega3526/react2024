import { useEffect, useState } from 'react';

function ErrorButton() {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) {
      throw new Error('Тут все сломалось');
    }
  }, [isError]);

  const handleError = () => {
    setIsError(true);
  };

  return (
    <button data-testid="button-error" onClick={handleError}>
      ERROR
    </button>
  );
}

export default ErrorButton;
