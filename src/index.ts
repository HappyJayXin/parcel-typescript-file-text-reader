import readFile from './readFile';
import downloadFile from './downloadFile';
import { getContent } from './content';

const upload = (<HTMLElement | null>document.getElementById('upload'));
const download = (<HTMLElement | null>document.getElementById('download'));

upload && (upload.onchange = readFile);

download && (download.addEventListener('click', () => {
  const content = getContent();
  content && downloadFile('text-reader', content);
}));
