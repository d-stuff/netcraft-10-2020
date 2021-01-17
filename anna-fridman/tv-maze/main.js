import { renderShows } from './renderShows.js'
import {shows} from '../../shows.js'

renderShows(shows)

const input = document.querySelector('.search');

input.addEventListener('input', () => {
	fetch(`http://api.tvmaze.com/search/shows?q=${input.value}`)
  .then(response => response.json())
  .then(renderShows);
})