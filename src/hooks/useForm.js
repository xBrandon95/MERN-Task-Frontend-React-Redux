import { useState } from 'react';

const useForm = initialState => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setFormValues(initialState);
  };

  return [formValues, handleInputChange, reset];
};

export default useForm;
