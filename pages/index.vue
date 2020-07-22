<template>
  <div>
    <nav class="navbar is-link is-fixed-top">
      <div class="navbar-brand">
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="#about">
            <span>About</span>
          </a>
          <a class="navbar-item" href="#services">
            <span>Services</span>
          </a>
          <a class="navbar-item" href="#resume">
            <span>Resume</span>
          </a>
          <a class="navbar-item" href="#portfolio">
            <span>Portfolio</span>
          </a>
          <a class="navbar-item" href="#contact">
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>

    <section class="hero is-link is-fullheight is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">Hello! I am
          <h1 class="title is-1">
            Fathan Rohman
          </h1>

          <h2 class="subtitle is-3">
            Full Stack Web Developer (Javascript, Node.js, Express.js , Vue, React, Nuxt)
          </h2>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="section-heading">
        <h3 class="title is-2">About Me</h3>
        <h4 class="subtitle is-5">
          A brief overview of my personal brief
        </h4>

        <div class="container">
          <p>
            Web developer with more than 5 years of well-rounded experience with a degree in the field of Computer Science,
            extensive knowledge of modern Web techniques. Looking for an opportunity to work and upgrade,
            as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community.
          </p>
        </div>
      </div>

      <div class="columns has-same-height is-gapless">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <h3 class="title is-4">Profile</h3>

              <div class="content">
                <table class="table-profile">
                  <tr>
                    <th colspan="1"></th>
                    <th colspan="2"></th>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td>Jakarta, Indonesia</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td><a href="tel:+6285692268882">0856-9226-8882</a> / <strong>Whatsapp</strong></td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td><a href="mailto:karir.fathan@gmail.com">karir.fathan@gmail.com</a></td>
                  </tr>
                </table>
              </div>
              <br>

              <div class="buttons has-addons is-centered">
                <a href="https://github.com/fathan" target="_blank" class="button is-dark">Github</a>
                <a href="https://www.linkedin.com/in/fathan/" target="_blank" class="button is-info">LinkedIn</a>
                <a href="https://facebook.com/fathanrohmanst" target="_blank" class="button is-link">Facebook</a>
                <a href="https://twitter.com/Fathan_Rohman" target="_blank" class="button is-primary">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="card-content skills-content">
              <h3 class="title is-4">Skills</h3>
              <div class="content">

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>JavaScript:</strong>
                        <br>
                        <progress class="progress is-primary" value="90" max="100"></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Node.js:</strong>
                        <br>
                        <progress class="progress is-primary" value="75" max="100"></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Vue.js:</strong>
                        <br>
                        <progress class="progress is-primary" value="90" max="100"></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>React.js:</strong>
                        <br>
                        <progress class="progress is-primary" value="70" max="100"></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>HTML5/CSS3/SCSS/SASS/LESS</strong>
                        <br>
                        <progress class="progress is-primary" value="85" max="100"></progress>
                      </p>
                    </div>
                  </div>
                </article>

                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Databases</strong>
                        <br>
                        <progress class="progress is-primary" value="55" max="100"></progress>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="resume">
      <div class="section-heading">
        <h3 class="title is-2">Resume</h3>
        <h4 class="subtitle is-5">More about my past</h4>
        <a href="https://drive.google.com/file/d/1DMRj_IJiozGqy7DacipYxPXwTIvQT22k/view" target="_blank" class="button is-danger is-medium">
          <span>Download My Resume</span>
        </a>
      </div>
    </section>

    <br>
    <div class="tags custom-tags">
      <span class="tag is-light">Node.js</span>
      <span class="tag is-light">Express.js</span>
      <span class="tag is-light">VueJS</span>
      <span class="tag is-light">JavaScript</span>
      <span class="tag is-light">HTML5</span>
      <span class="tag is-light">Canvas</span>
      <span class="tag is-light">CSS3</span>
      <span class="tag is-light">Bulma</span>
      <span class="tag is-light">Bootstrap</span>
      <span class="tag is-light">jQuery</span>
      <span class="tag is-light">Pug</span>
      <span class="tag is-light">Stylus</span>
      <span class="tag is-light">SASS/SCSS</span>
      <span class="tag is-light">Webpack</span>
      <span class="tag is-light">Git</span>
    </div>

    <section class="section" id="services">
      <div class="section-heading">
        <h3 class="title is-2">Services</h3>
        <h4 class="subtitle is-5">What can I do for you?</h4>
      </div>

      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="box">
              <div class="content">
                <h4 class="title is-5">Front End Web Development</h4>
                Develop Front End using latest standards with HTML5/CSS3 with added funtionality using JavaScript and Vue.js, Nuxt.js, Vuex, Webpack, SASS/SCSS/LESS, Git.
              </div>
            </div>
          </div>

          <div class="column">
            <div class="box">
              <div class="content">
                <h4 class="title is-5">Back End Web Development</h4>
                Develop Back End application/web service using Node.js or MySQL, PostgreSQL, MongoDB databases, Git.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="portfolio">
      <div class="container">
        <div class="section-heading">
          <h3 class="title is-2">Portfolio</h3>
          <h4 class="subtitle is-5">My latest works</h4>
        </div>
        <br>

        <div class="container portfolio-container">
          <div class="columns is-multiline">
            <div
              class="column is-4"
              v-for="(portofolio, portfolioIdx) in portofolios"
              :key="portfolioIdx"
            >
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    <span>{{ portofolio.name }}</span>
                    &nbsp;
                    <span class="is-pulled-right">
                      <span class="tag is-danger">{{ portofolio.type }}</span>
                    </span>
                  </p>
                </header>

                <footer class="card-footer">
                  <a
                    :href="portofolio.linkUrl"
                    class="card-footer-item"
                  >
                    Preview
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="section">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </div>
      </nav>
    </section> -->

    <!-- <section class="section" id="contact">
      <div class="container">
        <div class="section-heading">
          <h3 class="title is-2">Contact</h3>
          <h4 class="subtitle is-5">Get in touch</h4>
        </div>
        <br>

        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="box">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    v-model="formContact.name"
                    class="input"
                    type="text"
                    placeholder="Input your name"
                  >
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    v-model="formContact.email"
                    class="input"
                    type="email"
                    placeholder="Input your email"
                  >
                </div>
              </div>

              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea
                    v-model="formContact.message"
                    class="textarea"
                    placeholder="Input your message here"
                  ></textarea>
                </div>
              </div>

              <div class="field is-grouped has-text-centered">
                <div class="control">
                  <button
                    class="button is-link is-large"
                    @click="submitFormContact()"
                  >
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <footer class="footer">
      <div class="section-heading">
        <p>
          <strong>&copy; Copyright {{ computeYear }}</strong> by
          <a href="https://fathanrohman.com">Fathan Rohman</a> - Build with Love.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      portofolios: [
        {
          name: 'PT. Globalindo Digital Kreatif',
          type: 'E-commerce',
          linkUrl: 'http://globalkreatif.com'
        },
        {
          name: 'Save the Children',
          type: 'Web Interaktif',
          linkUrl: 'https://bumikita.stc.or.id'
        },
        {
          name: 'Daswin Property Office Tower',
          type: 'Company Profile',
          linkUrl: 'http://windas.dev'
        },
        {
          name: 'PT. Asuransi Jiwa Tugu Mandiri',
          type: 'Web App',
          linkUrl: 'http://globalkreatif.com'
        },
        {
          name: 'PT. Duta Teknologi Nusantara',
          type: 'Web App, Desktop',
          linkUrl: '#'
        },
        {
          name: 'Jaya Suprana School',
          type: 'Company Profile',
          linkUrl: 'http://globalkreatif.com'
        }
      ],
      formContact: {
        name: '',
        email: '',
        message: ''
      }
    }
  },

  computed: {
    computeYear () {
      let date = new Date();
      return date.getFullYear();
    }
  },

  methods: {
    submitFormContact () {
      let form = this.formContact;
      console.log(form);
    }
  }
}
</script>

<style lang="css" scoped>
.has-same-height .card {
  height: 320px;
  overflow: hidden;
}

.card-content h3 {
  text-align: center;
}

.table-profile td,
th {
  border: none !important;
}

.table-profile td:first-of-type {
  font-weight: bold;
}

.skills-content .media {
  margin: 0 !important;
  padding: 4px !important;
  border: 0 !important;
}

.skills-content .progress {
  height: 4px !important;
}

.custom-tags {
  text-align: center !important;
  display: block;
}

.portfolio-container .card {
  margin-bottom: 2em;
}

.section-heading {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 6em;
}

.card-header-title {
  display: inline-block!important;
}
</style>
