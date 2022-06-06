module.exports = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'unauthorized': 
      res.status(401).json({ message });
      break;
    case 'bad_request':
      res.status(400).json({ message });
      break;
    case 'not_found':
      res.status(404).json({ message }); break;
    case 'conflict':
      res.status(409).json({ message }); break;
    default:
      res.status(500).json({ message });
      break;
  }
};
