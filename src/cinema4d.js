/**
 * Some static CINEMA 4D variables.
 *
 * @api public
 */
var constants = {

  general: {
    nogui: {
      options: ['-nogui'],
      description: 'start without user interface'
    },
    license: {
      options: ['-license', 'ip', 'port'],
      description: 'specifies the license server'
    },
    homedir: {
      options: ['-homedir'],
      description: 'define a custom home write directory'
    },
    noopengl: {
      options: ['-noopengl'],
      description: 'disable OpenGL and avoid loading OpenGL libraries'
    },
    oglversion: {
      options: ['-oglversion='],
      description: 'force a specific OpenGL version. xxx must be 100 * (major version) + (minor version)'
    },
    server: {
      options: ['-server'],
      description: 'start c4d as a render server'
    },
    client: {
      options: ['-client'],
      description: 'start c4d as a render client'
    },
    title: {
      options: ['-title'],
      description: 'set the window title'
    },
    layout: {
      options: ['-layout', 'filename'],
      description: 'use a custom startup layout'
    },
    crashtest: {
      options: ['-crashtest'],
      description: 'causes an exception to test the built-in signal handler'
    },
    nocrashhandler: {
      options: ['-nocrashhandler'],
      description: 'suppress use of the application\'s crash handler'
    },
    nogui_nothreads: {
      options: ['-nogui_nothreads'],
      description: 'special commandline debug mode'
    },
    debug: {
      options: ['-debug'],
      description: 'enable debug output'
    }
  },
  
  render: {
    render: {
      options: ['-render', 'filename'],
      description: 'specify a file to render'
    },
    frame: {
      options: ['-frame', 'from', 'to', 'step'],
      description: 'specify start frame, end frame and frame step. \'to\' and \'step\' are optional'
    },
    oimage: {
      options: ['-oimage', 'imagename'],
      description: 'override the image output path for rendering'
    },
    omultipass: {
      options: ['-omultipass', 'imagename'],
      description: 'override the multipass output path for rendering'
    },
    oformat: {
      options: ['-oformat', 'imageformat'],
      description: 'override the image output format to TIFF/TGA/BMP/IFF/JPG/PICT/PSD/PSB/RLA/RPF/B3D'
    },
    oresolution: {
      options: ['-oresolution', 'width', 'height'],
      description: 'override output image size'
    },
    threads: {
      options: ['-threads', 'threadcnt'],
      description: 'specify number of threads (0 for auto-detection)'
    }
  }
};

exports.constants = constants;
