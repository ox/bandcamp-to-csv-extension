function save(data) {
  const encoder = new TextEncoder();
  const encoded = encoder.encode(data);
  const name = 'cart'+(Date.now())+'.csv';
  saveAs(new Blob([encoded], {type: 'text/csv'}), name);
}

function saveAs (blob, name) {
  const a = document.createElement('a')
  a.download = name
  a.rel = 'noopener'
  a.href = URL.createObjectURL(blob)

  setTimeout(() => { URL.revokeObjectURL(a.href) }, 30000)
  setTimeout(() => { click(a) }, 0)
}

function click (node) {
  try {
    node.dispatchEvent(new MouseEvent('click'))
  } catch (err) {
    var e = document.createEvent('MouseEvents')
    e.initMouseEvent('click')
    node.dispatchEvent(e)
  }
}

const str = ["Name,Original Cost,Cost Quantity,Cost Currency,Cost in USD,Link"];
document.querySelectorAll('.cartItemContents')
  .forEach((elem) => {
    const [anchor, _1, _2, cost] = elem.firstElementChild.children;
    const itemName = anchor.innerText.slice(0, anchor.innerText.lastIndexOf(","));
    const itemLink = anchor.href;
    const itemCost = cost.innerText;
    const [quantity, currency] = itemCost.slice(1).split(' ');

    str.push([itemName, itemCost, quantity, currency,0,itemLink].join(','));
  });


const downloadCSVButton = document.createElement('a');
downloadCSVButton.href = "#";
downloadCSVButton.classList.add('buttonLink', 'notSkinnable');
downloadCSVButton.style.setProperty('background-color', '#ec8f32');
downloadCSVButton.style.setProperty('margin-top', '20px');
downloadCSVButton.style.setProperty('border-radius', '4px');
downloadCSVButton.style.setProperty('text-decoration', 'none');
downloadCSVButton.innerText = "Download CSV";
downloadCSVButton.onclick = () => save(str.join("\n"));

const downloadCSVContainer = document.createElement('h4');
downloadCSVContainer.appendChild(downloadCSVButton);

const footer = document.getElementById('sidecartFooter');
if (footer) {
  footer.appendChild(downloadCSVContainer);
}
