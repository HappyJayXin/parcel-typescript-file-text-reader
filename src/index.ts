import readFile from './readFile';
const upload = (<HTMLElement | null>document.getElementById('upload'));

upload && (upload.onchange = readFile);
