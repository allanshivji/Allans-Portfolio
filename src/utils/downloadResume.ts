export const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'Allan_Shivji_Resume.pdf';
  link.click();
};