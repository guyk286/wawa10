import { MdbootstrapModule } from './mdbootstrap.module';

describe('MdbootstrapModule', () => {
  let mdbootstrapModule: MdbootstrapModule;

  beforeEach(() => {
    mdbootstrapModule = new MdbootstrapModule();
  });

  it('should create an instance', () => {
    expect(mdbootstrapModule).toBeTruthy();
  });
});
