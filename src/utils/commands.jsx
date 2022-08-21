
const commands = [
  { text: 'Vá para a frente' },
  { text: 'Gire para esquerda' },
  { text: 'Gire para a direita' },
  { text: 'Pule' },
  { text: 'Desça' }
]

export function sortCommands(){
  let command = []
  
  for (let i = 0; i < 8; i++) {
    command.push(commands[random(0, 4)]);
  }
  if (!command.includes(commands[0])) {
    command.pop();
    command.push(commands[0])
  }
  
  return command;
}

export function random(min, max) {
  return (
    Math.floor(Math.random() * (max - min + 1) + min)
  );
}