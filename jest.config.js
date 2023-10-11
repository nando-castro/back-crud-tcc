module.exports = {
    // Diretórios onde o Jest deve procurar pelos testes.
    roots: ["<rootDir>/"],
    
    // Extensões de arquivo que o Jest deve considerar para testes.
    testMatch: ["**/tests/**/*.test.js"],
    
    // Módulos que o Jest deve transformar antes de executar os testes.
    transform: {
      "^.+\\.js$": "babel-jest", // Se você estiver usando Babel para transpilar o código.
    },
    
    // Configuração do ambiente de teste (pode ser "jsdom" para testes de front-end).
    testEnvironment: "node",
    
    // Configuração para a saída dos resultados dos testes.
    reporters: ["default"],
    
  };