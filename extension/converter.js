/*!
 * Turkish ⇄ Unicode converter core (shared by the extension popup and the web page).
 * MIT License.
 */
(function (root) {
  "use strict";

  var TURKISH = "ğĞıİöÖüÜşŞçÇ";
  var SPECIAL = "'’+%!\"#$&()*,-./:;<=>?@[\]^_`{|}~";

  function esc(ch) {
    return "\u" + ch.charCodeAt(0).toString(16).padStart(4, "0");
  }

  /**
   * Text -> \uXXXX escapes.
   * @param {string} text
   * @param {boolean} includeSpecial  also escape punctuation / special characters
   * @param {string} keep             characters to leave untouched (only when includeSpecial)
   */
  function toUnicode(text, includeSpecial, keep) {
    var keepSet = new Set((keep || "").split(""));
    var out = "";
    for (var ch of text) {
      if (TURKISH.indexOf(ch) !== -1) out += esc(ch);
      else if (includeSpecial && !keepSet.has(ch) && SPECIAL.indexOf(ch) !== -1) out += esc(ch);
      else out += ch;
    }
    return out;
  }

  /**
   * \uXXXX escapes -> text. Only Turkish letters and the special characters
   * above are restored; any other escape is left as-is.
   */
  function toOriginal(text) {
    return text.replace(/\u([0-9a-fA-F]{4})/g, function (m, hex) {
      var ch = String.fromCharCode(parseInt(hex, 16));
      return TURKISH.indexOf(ch) !== -1 || SPECIAL.indexOf(ch) !== -1 ? ch : m;
    });
  }

  var api = { toUnicode: toUnicode, toOriginal: toOriginal, TURKISH: TURKISH, SPECIAL: SPECIAL };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.TRConverter = api;
})(typeof self !== "undefined" ? self : this);
