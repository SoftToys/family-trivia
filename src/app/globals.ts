
/**
 * name
 */
export class EnvConfig {

  get baseUrl(): string {
    console.log("ENV!!!" + ENV);
    if ('production' === ENV) {
      return '';
    }
    return 'http://localhost:5000';
  }
  version: string = '1.0.0';

  get facebookAppId(): string {
    if ('production' === ENV) {
      return '6989285989';
    }
    return '6989285989';
  }
}

export const IMAGES_ROOT= '/assets/img';

export const storageKeys = {
  Language: "lang"
};
