export abstract class BaseConfig {
  protected runEnv: string = process.env.NODE_ENV ?? "local";
}
