export const downloadFile = (
  filePath: string = '/assets/Allan_Shivji_Resume.pdf',
  filename: string = 'Allan_Shivji_Resume.pdf'
): void => {
  try {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Failed to download resume:', error);
    window.open('/assets/Allan_Shivji_Resume.pdf', '_blank');
  }
};
