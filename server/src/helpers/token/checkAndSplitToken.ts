const isBearerHave = (x: string): boolean => x.startsWith('Bearer');

const splitTokenFromBearer = (x: string): string => x.split(' ')[1];

export { isBearerHave, splitTokenFromBearer };
