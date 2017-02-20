var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/10YvhPr0LEZr0-GBWsVcOJ5YTUslVCmaQBHbVy9kmVhk/pubhtml';

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
}

function showInfo(data, tabletop) {
  // alert('Successfully processed!')
  console.log(data);
}

window.addEventListener('DOMContentLoaded', init)
