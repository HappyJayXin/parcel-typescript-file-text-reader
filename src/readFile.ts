import { readFileFormatter } from './formatter';
import { setContent } from './content';
import { showEl, hideEl } from './showAndHide';

const download = (<HTMLInputElement>document.getElementById('download'));
const upload = (<HTMLInputElement>document.getElementById('upload'));

const readFile: readFileFormatter<void> = (event) => {
  const file = event.target.files[0];
  const fReader = new FileReader();

  fReader.onload = (event: any | HTMLInputElement): void => {
    setContent(event.target.result);
  };
  fReader.readAsText(file);

  showEl(download);
  hideEl(upload);
}

export default readFile;
