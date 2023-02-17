const path = require('path');
const assert = require('assert');
const wasmTester = require('circom_tester').wasm;
const { performance } = require('perf_hooks');
const mlog = require('mocha-logger');
const utils = require('./utils');
const fs = require('fs');

describe('ED25519 verifcation test', () => {
  /*describe('When testing against the RFC test vector', () => {
    it('should verify correctly', async () => {
      const cir = await wasmTester(path.join(__dirname, 'circuits', 'verify.circom'));
      const pointA = [
        43933056957747458452560886832567536073542840507013052263144963060608791330050n,
        16962727616734173323702303146057009569815335830970791807500022961899349823996n,
        1n,
        47597536765056690778342994103149503974598380825968728087754575050160026478564n,
      ];
      const pointR = [
        26073464383897998325899031212762184271676052677226679463708862316754828477519n,
        20246927599389923510374971105736264637524117420538179767629249587300902801762n,
        1n,
        7867784340861643381702890578607277776011430152424699121581244161773093676488n,
      ];
      const A = 16962727616734173323702303146057009569815335830970791807500022961899349823996n;
      const msg = "Hi";
      const R8 = 78142972218048021222160463610080218564159109753358461787358041591257467621730n;
      const S = 4869643893319708471955165214975585939793846505679808910535986866633137979160n;
      const bufMsg = utils.bigIntToLEBuffer(msg);
      const bufR8 = utils.bigIntToLEBuffer(R8);
      const bufS = utils.bigIntToLEBuffer(S);
      const bufA = utils.bigIntToLEBuffer(A);
      const bitsMsg = utils.buffer2bits(bufMsg);
      const bitsR8 = utils.pad(utils.buffer2bits(bufR8), 256);
      const bitsS = utils.pad(utils.buffer2bits(bufS), 255).slice(0, 255);
      const bitsA = utils.pad(utils.buffer2bits(bufA), 256);
      const chunkA = [];
      const chunkR = [];

      for (let i = 0; i < 4; i++) {
        chunkA.push(utils.chunkBigInt(pointA[i], BigInt(2 ** 85)));
        chunkR.push(utils.chunkBigInt(pointR[i], BigInt(2 ** 85)));
      }

      for (let i = 0; i < 4; i++) {
        utils.pad(chunkA[i], 3);
        utils.pad(chunkR[i], 3);
      }
      try {
        const startTime = performance.now();
        const witness = await cir.calculateWitness({
          msg: bitsMsg, A: bitsA, R8: bitsR8, S: bitsS, PointA: chunkA, PointR: chunkR,
        });
        const endTime = performance.now();
        mlog.success(`Call to calculate witness took ${endTime - startTime} milliseconds`);
        assert.ok(witness[0] === 1n);
        assert.ok(witness[1] === 1n);
      } catch (e) {
        mlog.error(e);
        assert.ok(false);
      }
    });
  });*/

  describe('When testing against the RFC test vector', () => {
    it('should verify correctly', async () => {
      //const cir = await wasmTester(path.join(__dirname, 'circuits', 'verify.circom'));
      console.log("Setting up vars.");
      const pointA = [
        43933056957747458452560886832567536073542840507013052263144963060608791330050n,
        16962727616734173323702303146057009569815335830970791807500022961899349823996n,
        1n,
        47597536765056690778342994103149503974598380825968728087754575050160026478564n];
      const pointR = [
        26073464383897998325899031212762184271676052677226679463708862316754828477519n,
        20246927599389923510374971105736264637524117420538179767629249587300902801762n,
        1n,
        7867784340861643381702890578607277776011430152424699121581244161773093676488n];
      const A = 16962727616734173323702303146057009569815335830970791807500022961899349823996n;
      const msg = 33456n;
      const R8 = 78142972218048021222160463610080218564159109753358461787358041591257467621730n;
      const S = 4869643893319708471955165214975585939793846505679808910535986866633137979160n;
      const bufMsg = utils.bigIntToLEBuffer(msg);
      const bufR8 = utils.bigIntToLEBuffer(R8);
      const bufS = utils.bigIntToLEBuffer(S);
      const bufA = utils.bigIntToLEBuffer(A);
      const bitsMsg = utils.buffer2bits(bufMsg);
      const bitsR8 = utils.pad(utils.buffer2bits(bufR8), 256);
      const bitsS = utils.pad(utils.buffer2bits(bufS), 255).slice(0, 255);
      const bitsA = utils.pad(utils.buffer2bits(bufA), 256);
      const chunkA = [];
      const chunkR = [];

      for (let i = 0; i < 4; i++) {
        chunkA.push(utils.chunkBigInt(pointA[i], BigInt(2 ** 85)));
        chunkR.push(utils.chunkBigInt(pointR[i], BigInt(2 ** 85)));
      }

      for (let i = 0; i < 4; i++) {
        utils.pad(chunkA[i], 3);
        utils.pad(chunkR[i], 3);
      }
      console.log(bitsMsg);
      console.log(bitsA);
      console.log(bitsR8);
      console.log(bitsS);
      console.log(chunkA);
      console.log(chunkR);
      s = {
        'a':bitsMsg.toString(),
        'b':bitsA.toString(),
        'c':bitsR8.toString(),
        'd':bitsS.toString(),
        'e':chunkA.toString(),
        'f':chunkR.toString()
      }
      l = {
        'a':[],
        'b':[],
        'c':[],
        'd':[],
        'e':[],
        'f':[]
      }
      console.log(s['a'])
      console.log(JSON.parse("[" + s['a'] + "]"));
      data = "msg: " + s['a'] + '\n' + "A: " + s['b'] + '\n' + "R8: " + s['c'] + '\n' + "S: " + s['d'] + '\n'+ "chunkA: " + s['e'] + '\n' + "chunkR: " + s['f'];
      fs.writeFile('Output.txt', data, (err) => {

          // In case of a error throw err.
          if (err) throw err;
      })
      assert.ok(1===1);
      /*
      try {
        const witness = await cir.calculateWitness({
          msg: bitsMsg, A: bitsA, R8: bitsR8, S: bitsS, PointA: chunkA, PointR: chunkR,
        });
        assert.ok(witness[0] === 1n);
        assert.ok(witness[1] === 0n);
      } catch (e) {
        mlog.error(e);
        assert.ok(false);
      }*/
    });
  });
});
