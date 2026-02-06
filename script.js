const container = document.querySelector(".container");

let condition = true;
render();

function handleQrCode() {
  condition = false;
  render();
}

function render() {
  if (condition) {
    container.innerHTML = `<label class="qr-code-input" for="qr-input">
          <input id="qr-input" placeholder="Enter an url" />
          <button class="getQrButton">QR code</button>
        </label>`;

    document
      .querySelector(".getQrButton")
      .addEventListener("click", handleQrCode);
  } else {
    container.innerHTML = `<div class="qr-container">
            <div class="qr-code">
        </div>
        </div>
        <div class="other-button">
            <button onClick="onDownload()">Download<img src="/assets/Load_circle_duotone.svg" alt=""></button>
            <button onClick="onCopy()">Share<img src="/assets/link_alt.svg" alt=""></button>
        </div>`;
    var qrCode = new QRCode(document.querySelector(".container .qr-code"), {
      text: "hello world",
      width: 128,
      height: 128,
    });
  }
}

function onCopy() {
  const src = document.querySelector(".qr-code img");
  navigator.clipboard.writeText(src.src);
}

function onDownload() {
  const src = document.querySelector(".qr-code img");
  const link = document.createElement("a");
  link.href = src.src;
  link.download = "qr-code.png";
  link.style = "display: none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
