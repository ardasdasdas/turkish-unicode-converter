(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var input = $("inputText"), output = $("outputText");
  var special = $("includeSpecialChars"), keep = $("specialChars");
  var toUnicode = true;

  function render() {
    output.value = toUnicode
      ? TRConverter.toUnicode(input.value, special.checked, keep.value)
      : TRConverter.toOriginal(input.value);
    $("inCount").textContent = input.value.length + " karakter";
    $("outCount").textContent = output.value.length + " karakter";
  }

  function setMode(unicode) {
    toUnicode = unicode;
    $("modeUnicode").classList.toggle("active", unicode);
    $("modeOriginal").classList.toggle("active", !unicode);
    $("modeUnicode").setAttribute("aria-selected", unicode);
    $("modeOriginal").setAttribute("aria-selected", !unicode);
    $("specialOptions").classList.toggle("hidden", !unicode);
    input.placeholder = unicode ? "Metni buraya yaz veya yapıştır…" : "\\u00c7al\\u0131\\u015fkan gibi kaçışlı metni yapıştır…";
    render();
  }

  var toastTimer;
  function toast(msg) {
    var t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1400);
  }

  function copy(text, msg) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(function () { toast(msg || "Kopyalandı"); },
      function () { toast("Kopyalanamadı"); });
  }

  input.addEventListener("input", render);
  special.addEventListener("change", function () { keep.disabled = !special.checked; render(); });
  keep.addEventListener("input", render);
  $("modeUnicode").addEventListener("click", function () { setMode(true); });
  $("modeOriginal").addEventListener("click", function () { setMode(false); });
  $("swapButton").addEventListener("click", function () { input.value = output.value; setMode(!toUnicode); input.focus(); });
  $("clearButton").addEventListener("click", function () { input.value = ""; render(); input.focus(); });
  $("copyButton").addEventListener("click", function () { copy(output.value, "Sonuç kopyalandı"); });

  // Quick reference grid
  var grid = $("cheatGrid");
  Array.from(TRConverter.TURKISH).forEach(function (ch) {
    var esc = TRConverter.toUnicode(ch, false, "");
    var b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.innerHTML = "<b></b><span></span>";
    b.firstChild.textContent = ch;
    b.lastChild.textContent = esc;
    b.title = esc + " kopyala";
    b.addEventListener("click", function () { copy(esc, esc + " kopyalandı"); });
    grid.appendChild(b);
  });

  render();
})();
