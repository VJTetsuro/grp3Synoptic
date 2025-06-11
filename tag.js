document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('download').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(34, 34, 34);
    doc.text('Tag', doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text('Generated on: ' + new Date().toLocaleDateString(), 14, 30);
    doc.text('UserID: admin', 14, 40);
    const tagnum = Math.random().toString().slice(2,11);
    doc.text('Tag Number: ' + tagnum, 14, 50);
    doc.save('tag.pdf');
  });
});