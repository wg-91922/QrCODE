import prompt from "prompt";

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) console.log(err);

    if (choose.select == 1) await createQRCode();
    if (choose.select == 2) await createPassword();
    if (choose.select == 3) await gerarSenhaForte();
  });

  prompt.start();
}

async function gerarSenhaForte() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

  let password = "";

  for (let i = 0; i < 12; i++) {
    const iRandom = Math.floor(Math.random() * chars.length);
    password += chars[iRandom];
  }

  console.log("Senha forte:", password);
}

main();