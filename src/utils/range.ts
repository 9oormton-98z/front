const range = (l: number) => {
  let i = 0;
  const res = [];
  while (i++ < l) {
    res.push(i);
  }
  return res;
};

export default range;
