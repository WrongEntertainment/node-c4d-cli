var assert = require('assert');
var c4d_options_render = require('./../src/cinema4d_options_render.js');

suite('cinema4d_options_render.js', function() {
  suite('render', function() {
    test('getOptionsArray() without data.', function() {
      assert.deepEqual( [], c4d_options_render.render.getOptionsArray() );
    });

    test('getOptionsArray() with data "foo".', function() {
      assert.deepEqual( ['-render','foo'], c4d_options_render.render.getOptionsArray('foo') );
    });

    test('getOptionsArray() with incorrect data "123" (number).', function() {
      assert.deepEqual( [], c4d_options_render.render.getOptionsArray(123) );
    });
  });

  suite('frame', function() {
    test('getOptionsArray() without data.', function() {
      assert.deepEqual( [], c4d_options_render.frame.getOptionsArray() );
    });
    
    test('getOptionsArray() with data "0".', function() {
      assert.deepEqual( ['-frame','0'], c4d_options_render.frame.getOptionsArray('0') );
    });
    
    test('getOptionsArray() with data "0,1".', function() {
      assert.deepEqual( ['-frame','0','1'], c4d_options_render.frame.getOptionsArray('0,1') );
    });
    
    test('getOptionsArray() with data "0,1,2".', function() {
      assert.deepEqual( ['-frame','0','1','2'], c4d_options_render.frame.getOptionsArray('0,1,2') );
    });
  });

  suite('oimage', function() {
    test('getOptionsArray() without data.', function() {
      assert.deepEqual( [], c4d_options_render.oimage.getOptionsArray() );
    });
    
    test('getOptionsArray() with data "foo".', function() {
      assert.deepEqual( ['-oimage','foo'], c4d_options_render.oimage.getOptionsArray('foo') );
    });

    test('getOptionsArray() with incorrect data "123" (number).', function() {
      assert.deepEqual( [], c4d_options_render.oimage.getOptionsArray(123) );
    });
  });

  suite('omultipass', function() {
    test('getOptionsArray() without data.', function() {
      assert.deepEqual( [], c4d_options_render.omultipass.getOptionsArray() );
    });

    test('getOptionsArray() with data "foo".', function() {
      assert.deepEqual( ['-omultipass','foo'], c4d_options_render.omultipass.getOptionsArray('foo') );
    });

    test('getOptionsArray() with incorrect data "123" (number).', function() {
      assert.deepEqual( [], c4d_options_render.omultipass.getOptionsArray(123) );
    });
  });

  suite('oformat', function() {
    test('getOptionsArray() without data.', function() {
      assert.deepEqual( [], c4d_options_render.oformat.getOptionsArray() );
    });
    
    test('getOptionsArray() with data "TIFF".', function() {
      assert.deepEqual( ['-oformat','TIFF'], c4d_options_render.oformat.getOptionsArray('TIFF') );
    });

    test('getOptionsArray() with data "TGA".', function() {
      assert.deepEqual( ['-oformat','TGA'], c4d_options_render.oformat.getOptionsArray('TGA') );
    });
    
    test('getOptionsArray() with data "BMP".', function() {
      assert.deepEqual( ['-oformat','BMP'], c4d_options_render.oformat.getOptionsArray('BMP') );
    });
    
    test('getOptionsArray() with data "IFF".', function() {
      assert.deepEqual( ['-oformat','IFF'], c4d_options_render.oformat.getOptionsArray('IFF') );
    });
    
    test('getOptionsArray() with data "JPG".', function() {
      assert.deepEqual( ['-oformat','JPG'], c4d_options_render.oformat.getOptionsArray('JPG') );
    });
    
    test('getOptionsArray() with data "PICT".', function() {
      assert.deepEqual( ['-oformat','PICT'], c4d_options_render.oformat.getOptionsArray('PICT') );
    });
    
    test('getOptionsArray() with data "PSD".', function() {
      assert.deepEqual( ['-oformat','PSD'], c4d_options_render.oformat.getOptionsArray('PSD') );
    });
    
    test('getOptionsArray() with data "PSB".', function() {
      assert.deepEqual( ['-oformat','PSB'], c4d_options_render.oformat.getOptionsArray('PSB') );
    });
    
    test('getOptionsArray() with data "RLA".', function() {
      assert.deepEqual( ['-oformat','RLA'], c4d_options_render.oformat.getOptionsArray('RLA') );
    });
    
    test('getOptionsArray() with data "RPF".', function() {
      assert.deepEqual( ['-oformat','RPF'], c4d_options_render.oformat.getOptionsArray('RPF') );
    });
    
    test('getOptionsArray() with data "B3D".', function() {
      assert.deepEqual( ['-oformat','B3D'], c4d_options_render.oformat.getOptionsArray('B3D') );
    });

    test('getOptionsArray() with incorrect data "foo".', function() {
      assert.deepEqual( ['-oformat','TIFF'], c4d_options_render.oformat.getOptionsArray('foo') );
    });
  });

  suite('oresolution', function() {
    test('getOptionsArray() without data.', function() {
      assert.deepEqual( [], c4d_options_render.oresolution.getOptionsArray() );
    });

    test('getOptionsArray() with data "1000,1000".', function() {
      assert.deepEqual( ['-oresolution','1000','1000'], c4d_options_render.oresolution.getOptionsArray('1000,1000') );
    });
    
    test('getOptionsArray() with incorrect data "foo".', function() {
      assert.deepEqual( [], c4d_options_render.oresolution.getOptionsArray('foo') );
    });
  });

  suite('threads', function() {
    test('getOptionsArray() without data.', function() {
      assert.deepEqual( [], c4d_options_render.threads.getOptionsArray() );
    });
    
    test('getOptionsArray() with data. "1"', function() {
      assert.deepEqual( ['-threads','1'], c4d_options_render.threads.getOptionsArray(1) );
    });
    
    test('getOptionsArray() with incorrect data "foo" (string).', function() {
      assert.deepEqual( ['-threads','0'], c4d_options_render.threads.getOptionsArray('foo') );
    });
  });
});
