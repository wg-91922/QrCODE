import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta (1 - QRCODE, 2 - PASSWORD, 3 - PASSWORD FORTE):"
    ),

    // permite que o usuário escolha entre 1, 2 ou 3
    // isso valida a entrada para evitar opções inválidas
    pattern: /^[1-3]+$/,

    // mensagem exibida caso o usuário digite algo inválido
    message: chalk.red.italic("Escolha apenas entre 1, 2 ou 3"),

    // torna o campo obrigatório (usuário não pode apertar enter vazio)
    required: true,
  },
];

export default promptSchemaMain;