import chai, { expect } from 'chai';

import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);
chai.use(dirtyChai);

global.expect = expect;
