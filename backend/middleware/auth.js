import jwt from 'jsonwebtoken';

export const autenticar = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ erro: "Token não fornecido" });

  try {
    req.usuario = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ erro: "Token inválido" });
  }
};

export const somenteAdmin = (req, res, next) => {
  if (req.usuario.cargo !== 'admin') {
    return res.status(403).json({ erro: 'Apenas administradores têm acesso' });
  }
  next();
};
