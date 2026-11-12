document.addEventListener("DOMContentLoaded", function () {
  var $ = function (id) { return document.getElementById(id); };

  function run(toUnicode) {
    var text = $("inputText").value;
    $("outputContainer").textContent = toUnicode
      ? TRConverter.toUnicode(text, $("includeSpecialChars").checked, $("specialChars").value)
      : TRConverter.toOriginal(text);
  }

  $("convertToUnicodeButton").addEventListener("click", function () { run(true); });
  $("convertToOriginalButton").addEventListener("click", function () { run(false); });

  $("copyButton").addEventListener("click", function () {
    var btn = $("copyButton");
    navigator.clipboard.writeText($("outputContainer").textContent).then(function () {
      btn.textContent = "Kopyalandı ✓";
      setTimeout(function () { btn.textContent = "Kopyala"; }, 1200);
    });
  });
});
