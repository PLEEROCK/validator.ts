import { DefaultDriver, getTranslatorDriver, setTranslatorDriver } from '../../src';
import { Validator } from '../../src/validation/Validator';

const validator = new Validator();

describe('translator driver', () => {
  it('should not return any instance other than the default instance of the driver', () => {
    const translatorDriver = getTranslatorDriver();

    expect(translatorDriver).toBeInstanceOf(DefaultDriver);
  });

  it('should not perform translation into any language other than the driver\'s default language (English) when none is specified', () => {
    const translatorDriver = getTranslatorDriver();

    const text: string = translatorDriver.translate('class-validator.is-not-empty');

    expect(text).toEqual('$property should not be empty');
  });

  it('should not perform translation into any language other than the specified language', () => {
    const translatorDriver = getTranslatorDriver();

    const text: string = translatorDriver.translate('class-validator.is-not-empty', 'en');

    expect(text).toEqual('$property should not be empty');
  });

  it('should not translate the message if enter an unsupported language', () => {
    const translatorDriver = getTranslatorDriver();

    const text: string = translatorDriver.translate('class-validator.is-not-empty', 'xx');

    expect(text).toEqual('class-validator.is-not-empty');
  });

  it('should not return an instance other than the custom driver instance.', () => {
    class CustomDriver extends DefaultDriver {
    }

    setTranslatorDriver(new CustomDriver());

    const translatorDriver = getTranslatorDriver();

    expect(translatorDriver).toBeInstanceOf(CustomDriver);
  });
});

describe('default driver', () => {
  it('should not perform translation into any language other than the language specified as default in the driver options', () => {
    const translatorDriver = new DefaultDriver({
      defaultLanguage: 'en'
    });

    const text: string = translatorDriver.translate('class-validator.is-not-empty');

    expect(text).toEqual('$property should not be empty');
  });

  it('should not translate the message if enter an unsupported language specified as default in the driver options', () => {
    const translatorDriver = new DefaultDriver({
      defaultLanguage: 'xx'
    });

    const text: string = translatorDriver.translate('class-validator.is-not-empty');

    expect(text).toEqual('class-validator.is-not-empty');
  });

  it('should not perform translation into any language other than the driver\'s default language (English) when none is specified', () => {
    const translatorDriver = new DefaultDriver();

    const text: string = translatorDriver.translate('class-validator.is-not-empty');

    expect(text).toEqual('$property should not be empty');
  });

  it('should not perform translation into any language other than the language specified', () => {
    const translatorDriver = new DefaultDriver();

    const text: string = translatorDriver.translate('class-validator.is-not-empty', 'en');

    expect(text).toEqual('$property should not be empty');
  });

  it('should not translate the message if enter an unsupported language specified', () => {
    const translatorDriver = new DefaultDriver();

    const text: string = translatorDriver.translate('class-validator.is-not-empty', 'xx');

    expect(text).toEqual('class-validator.is-not-empty');
  });
});