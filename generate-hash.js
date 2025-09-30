const crypto = require('crypto');

// Função para gerar hash SHA-256 de uma senha
function generatePasswordHash(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Exemplos de senhas e seus hashes
const passwords = [
  'admin123',
  'metricas2025', 
  'senha123',
  'minhasenha'
];

console.log('=== GERADOR DE HASH DE SENHAS ===\n');

passwords.forEach(password => {
  const hash = generatePasswordHash(password);
  console.log(`Senha: "${password}"`);
  console.log(`Hash:  "${hash}"`);
  console.log('---');
});

console.log('\n=== COMO USAR ===');
console.log('1. Escolha uma senha da lista acima');
console.log('2. Copie o hash correspondente');
console.log('3. Cole no arquivo MetricasPage.js na propriedade passwordHash');
console.log('\nSenha atual: "admin123"');
console.log('Hash atual: "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9"');