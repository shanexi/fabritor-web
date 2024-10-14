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
  fontFamily: 'Roboto',
  // size
  width: 500,
  // 中文处理
  splitByGrapheme: true
}

export const FONT_PRESET_FAMILY_LIST = [
  {
    label: <span style={{
      fontFamily: 'SmileySans',
      fontSize: 16
    }}>得意黑</span>,
    value: 'SmileySans'
  },
  {
    label: <span style={{
      fontFamily: '霞鹜新晰黑',
      fontSize: 16
    }}>霞鹜新晰黑</span>,
    value: '霞鹜新晰黑'
  },
  {
    label: <span style={{
      fontFamily: '霞鹜文楷',
      fontSize: 16
    }}>霞鹜文楷</span>,
    value: '霞鹜文楷'
  },
  {
    label: <span style={{
      fontFamily: '小赖字体',
      fontSize: 16
    }}>小赖字体</span>,
    value: '小赖字体'
  },
  {
    label: <span style={{
      fontFamily: '悠哉字体',
      fontSize: 16
    }}>悠哉字体</span>,
    value: '悠哉字体'
  },
  {
    label: <span style={{
      fontFamily: 'AlibabaPuHuiTi',
      fontSize: 16
    }}>阿里巴巴普惠体</span>,
    value: 'AlibabaPuHuiTi'
  },
  {
    label: <span style={{
      fontFamily: '霞鹜尚智黑',
      fontSize: 16
    }}>霞鹜尚智黑</span>,
    value: '霞鹜尚智黑'
  },
  {
    label: <span style={{
      fontFamily: 'SourceHanSans',
      fontSize: 16
    }}>思源黑体</span>,
    value: 'SourceHanSans'
  },
  {
    label: <span style={{
      fontFamily: 'SourceHanSerif',
      fontSize: 16
    }}>思源宋体</span>,
    value: 'SourceHanSerif'
  },
  {
    label: <span style={{
      fontFamily: '方正楷体',
      fontSize: 16
    }}>方正楷体</span>,
    value: '方正楷体'
  },
  {
    label: <span style={{
      fontFamily: '包图小白体',
      fontSize: 16
    }}>包图小白体</span>,
    value: '包图小白体'
  },
  {
    label: <span style={{
      fontFamily: '手写杂字体',
      fontSize: 16
    }}>手写杂字体</span>,
    value: '手写杂字体'
  },
  {
    label: <span style={{
      fontFamily: '胡晓波男神体',
      fontSize: 16
    }}>胡晓波男神体</span>,
    value: '胡晓波男神体'
  },
  {
    label: <span style={{
      fontFamily: '胡晓波骚包体',
      fontSize: 16
    }}>胡晓波骚包体</span>,
    value: '胡晓波骚包体'
  },
  {
    label: <span style={{
      fontFamily: '站酷快乐体',
      fontSize: 16
    }}>站酷快乐体</span>,
    value: '站酷快乐体'
  },
  {
    label: <span style={{
      fontFamily: '站酷文艺体',
      fontSize: 16
    }}>站酷文艺体</span>,
    value: '站酷文艺体'
  },
  {
    label: <span style={{
      fontFamily: '站酷小薇LOGO体',
      fontSize: 16
    }}>站酷小薇LOGO体</span>,
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
    label: <span style={{
      fontFamily: f,
      fontSize: 16
    }}>{f}</span>,
    value: f
  }
))

export const IMAGE_PLACEHOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAYAAADbcAZoAAAlWklEQVR4Ae3dX2id553g8afdLCPdSb6yvOyuJd9E9v6Jpdw4Ti+sxBdpSCFJydA/ZNhkIGzI0FJmoDB7sZeFHUrLhpaUNEOzaQpJk0Azqdm1Y18kti8mtntRW94dLJndHStXPoItkQYK3fOc+E0dO44tnef9nfd9z+cD4tRyrCO7OvB8z/PvCx99tPGHBAAAEOCLCQAAIIgAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACCMAAEAAMIIEAAAIIwAAQAAwggQAAAgjAABAADCCBAAACDMXQmg43q99XR1fX3w+PGve2lzczNtbG586r+53uD3NzYTbNf09NRN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RoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABBGgAAAAGEECAAAEEaAAAAAYQQIAAAQRoAAAABhBAgAABDm/wPEkoFZju8uKwAAAABJRU5ErkJggg=="
