export const APP_NAME = 'fabritor';
export const APP_VERSION = '3.0.0';
export const SCHEMA_VERSION = 3.1;
export const SCHEMA_VERSION_KEY = 'fabritor_schema_version';
export const LOG_PREFIX = `${APP_NAME}_log：`;

export const OBJECT_DEFAULT_CONFIG = {
  // controls
  borderColor: '#FF2222',
  borderScaleFactor: 2,
  cornerStrokeColor: '#2222',
  cornerColor: '#FF2222',
  cornerSize: 12,
  cornerStyle: 'circle',
  transparentCorners: false,
  padding: 0,
  centeredScaling: false,
  strokeUniform: true,
  paintFirst: 'stroke'
}

export const TEXTBOX_DEFAULT_CONFIG = {
  // styles
  fill: '#000000',
  fontWeight: 'normal',
  fontSize: 50,
  lineHeight: 1.30,
  textAlign: 'center',
  fontFamily: 'AlibabaPuHuiTi',
  // size
  width: 500,
  // 中文处理
  splitByGrapheme: true
}

export const FONT_PRESET_FAMILY_LIST = [
  { 
    label: <span style={{ fontFamily: 'SmileySans', fontSize: 16 }}>得意黑</span>, 
    value: 'SmileySans' 
  },
  { 
    label: <span style={{ fontFamily: '霞鹜新晰黑', fontSize: 16 }}>霞鹜新晰黑</span>, 
    value: '霞鹜新晰黑' 
  },
  { 
    label: <span style={{ fontFamily: '霞鹜文楷', fontSize: 16 }}>霞鹜文楷</span>, 
    value: '霞鹜文楷' 
  },
  { 
    label: <span style={{ fontFamily: '小赖字体', fontSize: 16 }}>小赖字体</span>, 
    value: '小赖字体' 
  },
  { 
    label: <span style={{ fontFamily: '悠哉字体', fontSize: 16 }}>悠哉字体</span>, 
    value: '悠哉字体' 
  },
  { 
    label: <span style={{ fontFamily: 'AlibabaPuHuiTi', fontSize: 16 }}>阿里巴巴普惠体</span>, 
    value: 'AlibabaPuHuiTi'
  },
  { 
    label: <span style={{ fontFamily: '霞鹜尚智黑', fontSize: 16 }}>霞鹜尚智黑</span>, 
    value: '霞鹜尚智黑' 
  },
  { 
    label: <span style={{ fontFamily: 'SourceHanSans', fontSize: 16 }}>思源黑体</span>, 
    value: 'SourceHanSans' 
  },
  { 
    label: <span style={{ fontFamily: 'SourceHanSerif', fontSize: 16 }}>思源宋体</span>, 
    value: 'SourceHanSerif' 
  },
  { 
    label: <span style={{ fontFamily: '方正楷体', fontSize: 16 }}>方正楷体</span>, 
    value: '方正楷体' 
  },
  { 
    label: <span style={{ fontFamily: '包图小白体', fontSize: 16 }}>包图小白体</span>, 
    value: '包图小白体' 
  },
  { 
    label: <span style={{ fontFamily: '手写杂字体', fontSize: 16 }}>手写杂字体</span>, 
    value: '手写杂字体' 
  },
  { 
    label: <span style={{ fontFamily: '胡晓波男神体', fontSize: 16 }}>胡晓波男神体</span>, 
    value: '胡晓波男神体' 
  },
  { 
    label: <span style={{ fontFamily: '胡晓波骚包体', fontSize: 16 }}>胡晓波骚包体</span>, 
    value: '胡晓波骚包体' 
  },
  { 
    label: <span style={{ fontFamily: '站酷快乐体', fontSize: 16 }}>站酷快乐体</span>, 
    value: '站酷快乐体' 
  },
  { 
    label: <span style={{ fontFamily: '站酷文艺体', fontSize: 16 }}>站酷文艺体</span>, 
    value: '站酷文艺体' 
  },
  { 
    label: <span style={{ fontFamily: '站酷小薇LOGO体', fontSize: 16 }}>站酷小薇LOGO体</span>, 
    value: '站酷小薇LOGO体' 
  }
]

export const SKETCH_ID = 'fabritor-sketch';

export const FABRITOR_CUSTOM_PROPS = [
  'id',
  'fabritor_desc',
  'selectable',
  'hasControls',
  'sub_type',
  'imageSource',
  'imageBorder',
  'oldArrowInfo',
  'ref',
];

export const COMPLETE_GOOGLE_FONTS = [
  'Roboto',
  'Zilla Slab Highlight',
  'Open Sans',
  'Spectral',
  'Slabo 27px',
  'Lato',
  'Roboto Condensed',
  'Oswald',
  'Source Sans Pro',
  'Raleway',
  'Zilla Slab',
  'Montserrat',
  'PT Sans',
  'Roboto Slab',
  'Merriweather',
  'Saira Condensed',
  'Saira',
  'Open Sans Condensed',
  'Saira Semi Condensed',
  'Saira Extra Condensed',
  'Julee',
  'Archivo',
  'Ubuntu',
  'Lora',
  'Manuale',
  'Asap Condensed',
  'Faustina',
  'Cairo',
  'Playfair Display',
  'Droid Serif',
  'Noto Sans',
  'PT Serif',
  'Droid Sans',
  'Arimo',
  'Poppins',
  'Sedgwick Ave Display',
  'Titillium Web',
  'Muli',
  'Sedgwick Ave',
  'Indie Flower',
  'Mada',
  'PT Sans Narrow',
  'Noto Serif',
  'Bitter',
  'Dosis',
  'Josefin Sans',
  'Inconsolata',
  'Bowlby One SC',
  'Oxygen',
  'Arvo',
  'Hind',
  'Cabin',
  'Fjalla One',
  'Anton',
  'Cairo',
  'Playfair Display',
  'Droid Serif',
  'Noto Sans',
  'PT Serif',
  'Droid Sans',
  'Arimo',
  'Poppins',
  'Sedgwick Ave Display',
  'Titillium Web',
  'Muli',
  'Sedgwick Ave',
  'Indie Flower',
  'Mada',
  'PT Sans Narrow',
  'Noto Serif',
  'Bitter',
  'Dosis',
  'Josefin Sans',
  'Inconsolata',
  'Bowlby One SC',
  'Oxygen',
  'Arvo',
  'Hind',
  'Cabin',
  'Fjalla One',
  'Anton',
  'Acme',
  'Archivo Narrow',
  'Mukta Vaani',
  'Play',
  'Cuprum',
  'Maven Pro',
  'EB Garamond',
  'Passion One',
  'Ropa Sans',
  'Francois One',
  'Archivo Black',
  'Pathway Gothic One',
  'Exo',
  'Vollkorn',
  'Libre Franklin',
  'Crete Round',
  'Alegreya',
  'PT Sans Caption',
  'Alegreya Sans',
  'Source Code Pro',
]

export const FONT_PRESET_FAMILY_LIST_GOOGLE_FONT = COMPLETE_GOOGLE_FONTS.map(f => (
    {
      label: <span style={{ fontFamily: f, fontSize: 16 }}>{f}</span>,
      value: f
    }
))
