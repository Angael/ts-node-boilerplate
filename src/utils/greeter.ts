export enum Delays {
  Short = 500,
  Medium = 2000,
  Long = 5000,
}

function delayedHello(
  name: string,
  delay: number = Delays.Medium,
): Promise<string> {
  return new Promise((resolve: (value?: string) => void) =>
    setTimeout(() => resolve(`Hello, ${name}`), delay),
  );
}

export async function greeter(name: any) {
  return await delayedHello(name, Delays.Long);
}