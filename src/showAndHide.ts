import { showAndHideFormatter } from './formatter';

const showEl: showAndHideFormatter<void> = element => {
  element.classList.remove('hide');
}

const hideEl: showAndHideFormatter<void> = element => {
  element.classList.add('hide');
}

export { showEl, hideEl };
