export const encode = (input: string) =>
  input.replace(/(\D)\1+/g, (match, character) => match.length + character);

export const decode = (input: string) =>
  input.replace(/(\d+)(\D)/g, (_match, count, character) =>
    character.repeat(count)
  );
