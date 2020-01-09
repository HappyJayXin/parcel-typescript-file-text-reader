const content = (<HTMLInputElement>document.getElementById('content'));

export default function (event: any | HTMLInputElement): void {
  const file = event.target.files[0];
  const fReader = new FileReader();

  content.value = 'Hello';
  fReader.onload = (event: any | HTMLInputElement): void => {
    content.value = event.target.result;
  };
  fReader.readAsText(file);
}