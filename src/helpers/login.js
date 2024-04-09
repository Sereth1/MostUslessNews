exports.handleChange = (e) => {
  const { name, value } = e.target;
  setInputs((prev) => ({ ...prev, [name]: value }));
};
