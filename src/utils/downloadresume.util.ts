export default function downloadResume() {
  const link = document.createElement("a");
  link.href = "/cv/Mohd_Uvaish_Resume.pdf";
  link.download = "Mohd_Uvaish_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
