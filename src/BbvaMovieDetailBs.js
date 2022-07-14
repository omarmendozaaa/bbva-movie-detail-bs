import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './BbvaMovieDetailBs-styles.js';
import '@boomovie/bbva-list-category-card/bbva-list-category-card.js'
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<bbva-movie-detail-bs></bbva-movie-detail-bs>
```

##styling-doc

@customElement bbva-movie-detail-bs
*/
export class BbvaMovieDetailBs extends LitElement {
  static get is() {
    return 'bbva-movie-detail-bs';
  }
  getData(data) {
    this.movie = data;
  }
  // Declare properties
  static get properties() {
    return {
      movie: { type: Object },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.base_url = 'https://image.tmdb.org/t/p/original';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('bbva-movie-detail-bs-shared-styles'),
    ];
  }

  // Define a template
  render() {
    const release_date = new Date(this.movie.release_date);
    return html`
      <div class="card bg-dark text-white">
        <img
          src="${this.base_url}${this.movie.backdrop_path}"
          class="backdrop-img"
          alt="${this.movie.title}"
        />
        <div class="container-contrast">
          <div class="mb-3">
            <div class="card-body">
              <div class="row g-0">
                <div class="col-md-4 col-sm-4 text-center align-self-center">
                  <img
                    src="${this.base_url}${this.movie.poster_path}"
                    class="img-fluid rounded"
                    style="width: 90%"
                    alt="${this.movie.title}"
                  />
                </div>
                <div class="col-md-8 col-sm-8">
                  <div class="card-body">
                    <h1 class="card-title">
                      ${this.movie.title} (${release_date.getFullYear()})
                    </h1>
                    <p class="card-text">${this.movie.tagline}</p>
                    <p class="fst-italic fw-bold">Overview</p>
                    <p class="card-text">${this.movie.overview}</p>
                    <p class="fst-italic fw-bold">Categories</p>
                    <bbva-list-category-card .categoryList=${this.movie.genres} .isdetail=${true}></bbva-list-category-card>
                    <br>
                    <p class="fst-italic fw-bold">Rate</p>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: ${this.movie.vote_average * 10}%;"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        ${this.movie.vote_average * 10}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
