document.getElementById('download').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(34, 34, 34);
  doc.text('Tag', 105, 20, {align: 'center'});

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('Generated on: ' + new Date().toLocaleDateString(), 14, 30);

  doc.save('tag.pdf');
})