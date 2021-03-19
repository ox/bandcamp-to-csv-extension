# Bandcamp Cart to CSV

This Chrome extension will generate and download a CSV with your current Bandcamp cart. Each row will have the name of the release, the cost split up into units and currency, and a link to the release. This is a stepping stone that I use to convert the various currencies to USD to guage how the cart cost is distributed.

Limitations:

- Only works on `<band>.bandcamp.com`, not on custom domains that use bandcamp.

## Installation (unpacked)

- Download this codebase as a ZIP and extract it to a folder
- Read the code and understand what it does
- Open your [Chrome Extensions](chrome://extensions/) and enable "Developer Mode"
- Click "Load unpacked" and navigate to the folder that you extracted in the first step
  - `manifest.json` should be visible and grayed out
- Click "select"
- Done

## Usage

Navigate to a Bandcamp release page where your cart is visible. Under the "Checkout" button should be a "Download CSV" button. Clicking the button will download a CSV which you can then import into Google Sheets or your software of choice.
