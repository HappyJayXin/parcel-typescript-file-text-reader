import { getContentFormatter, setContentFormatter } from './formatter';

const getContent: getContentFormatter<string> = () => {
  const content = (<HTMLInputElement>document.getElementById('content'));
  return content.value;
}

const setContent: setContentFormatter<void> = (text) => {
  const content = (<HTMLInputElement>document.getElementById('content'));
  content.value = text;
}

export { getContent, setContent };
