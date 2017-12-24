const  invoicesHtml = require( './InvoicesPrePDF.html');

exports.SerializedHTML = () => {
  XMLSerializer().serializeToString(invoicesHtml)}