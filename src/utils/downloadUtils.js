
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadAsImage = async () => {
  const cardElement = document.getElementById('greeting-card');
  if (!cardElement) {
    throw new Error('Card element not found');
  }

  try {
    const canvas = await html2canvas(cardElement, {
      backgroundColor: null,
      scale: 2, // Higher quality
      useCORS: true,
      allowTaint: false
    });

    // Create download link
    const link = document.createElement('a');
    link.download = `greeting-card-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};

export const downloadAsPDF = async () => {
  const cardElement = document.getElementById('greeting-card');
  if (!cardElement) {
    throw new Error('Card element not found');
  }

  try {
    const canvas = await html2canvas(cardElement, {
      backgroundColor: null,
      scale: 2,
      useCORS: true,
      allowTaint: false
    });

    const imgData = canvas.toDataURL('image/png');
    
    // Create PDF with card dimensions
    const cardAspectRatio = 3/4; // width/height
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = pdfWidth / cardAspectRatio;
    
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [pdfWidth, pdfHeight]
    });

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`greeting-card-${Date.now()}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
