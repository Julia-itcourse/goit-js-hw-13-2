
import refs from './refs';

const loadMoreBtnAction = {
  enable() {
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtnLabel.textContent = 'Show more';
    refs.loadMoreBtnSpinner.classList.add('is-hidden');
  },

  disable() {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtnLabel.textContent = 'Loading...';
    refs.loadMoreBtnSpinner.classList.remove('is-hidden');
  },

  show() {
    refs.loadMoreBtn.classList.remove('is-hidden');
  },

  hide() {
    refs.loadMoreBtn.classList.add('is-hidden');
  },
};

export default loadMoreBtnAction