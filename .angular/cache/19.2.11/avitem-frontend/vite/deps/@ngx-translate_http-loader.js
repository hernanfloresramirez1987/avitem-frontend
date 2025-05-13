import "./chunk-GOMI4DH3.js";

// node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js
var TranslateHttpLoader = (
  /** @class */
  function() {
    function TranslateHttpLoader2(http, prefix, suffix) {
      if (prefix === void 0) {
        prefix = "/assets/i18n/";
      }
      if (suffix === void 0) {
        suffix = ".json";
      }
      this.http = http;
      this.prefix = prefix;
      this.suffix = suffix;
    }
    TranslateHttpLoader2.prototype.getTranslation = function(lang) {
      return this.http.get("" + this.prefix + lang + this.suffix);
    };
    return TranslateHttpLoader2;
  }()
);
export {
  TranslateHttpLoader
};
//# sourceMappingURL=@ngx-translate_http-loader.js.map
