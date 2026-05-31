import { resumeFileName } from "./main.util";

export default function resumeDownloaderUtility() {
  const link = document.createElement("a");
  link.href = `/cv/${resumeFileName}`;
  link.download = resumeFileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
