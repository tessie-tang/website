<template>
    <div>
        <Header color="#0B86CF"/>

        <!-- COVER -->
        <Container>
            <div class="columns cover">
                <div class="column is-7-desktop is-7-tablet">
                    <h1>Hi, I'm Xinyi Tang<br>Product Designer with a strong focus on enterprise software solutions.</h1>
                    <h2>I design cloud-based digital tools that help business grow and impact users in a positive way. 🌸 Currently a product designer at <strong>PKchem Engineering</strong>.</h2>
                </div>
                <b-image :src="base_url + '/origin/' + cover" :placeholder="base_url + '/compress/' + cover" :lazy="false" class="column is-5-desktop is-5-tablet" />
            </div>
        </Container>

        <!-- PROJECTS -->
        <Container>
            <p class="project_intro">Some of my recent work:</p>
        </Container>
        <Container v-for="(project, i) in projects" :key="`project_${i}`" class="project">
            <div @click="projectRoute(project.url)">
                <b-image :src="project.base_url + '/origin/' + project.cover" :placeholder="project.base_url + '/compress/' + project.cover" class="project-cover" :lazy="false" />
                <p class="project-title">{{project.title}}</p>
                <p class="project-description">{{project.description}}</p>
            </div>
        </Container>

        <Footer style="margin-top: 100px" />
    </div>
</template>

<script>
import store from '../store'
import Header from '@/components/Header.vue'
import ImageFrame from '../components/ImageFrame.vue'
import Container from '../components/Container.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ImageFrame,
    Container,
    Footer
  },
  methods: {
    projectRoute (to) {
      this.$router.push(to)
      window.scrollTo(0, 0)
    }
  },
  data () {
    return store.state.home
  }
}
</script>

<style scoped>
    .cover {
        padding-top: 100px;
        text-align: left;
    }

    @media all and (max-width: 800px) {
        .cover h1 {
            color: #000000;
            font-size: 2rem;
            font-weight: 700;
            line-height: 3rem;
            background-clip: text;
            background-size: cover;
            -webkit-background-clip: text;
            background-color: #0B86CF;
            background-image: url(https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/background.gif);
            -webkit-text-fill-color: transparent;
        }

        .cover h2 {
            margin-top: 1.5rem;
            font-size: 1rem;
            line-height: 2rem;
            font-weight: 500;
            border-left: 5px solid #0B86CF;
            padding-left: 20px;
        }

        .project_intro {
            margin-top: 100px;
            width: 100%;
            text-align: center;
            font-style: normal;
            font-weight: 600;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            line-height: 3rem;
        }

        .project-title {
            font-weight: 600;
            font-size: 1rem;
            line-height: 2rem;
            text-align: left;
        }

        .project-description {
            font-weight: 400;
            font-size: 0.8rem;
            line-height: 2rem;
            text-align: left;
        }

        .project {
            margin-bottom: 50px;
        }
    }

    @media all and (min-width: 801px) {
        .cover h1 {
            color: #000000;
            font-size: 3rem;
            font-weight: 700;
            line-height: 4.2rem;
            background-clip: text;
            background-size: cover;
            -webkit-background-clip: text;
            background-color: #0B86CF;
            background-image: url(https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/background.gif);
            -webkit-text-fill-color: transparent;
        }

        .cover h2 {
            margin-top: 2rem;
            font-size: 1.2rem;
            line-height: 2rem;
            font-weight: 500;
            border-left: 5px solid #0B86CF;
            padding-left: 20px;
        }

        .project_intro {
            margin-top: 150px;
            width: 100%;
            text-align: center;
            font-style: normal;
            font-weight: 600;
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            line-height: 3rem;
        }

        .project-title {
            font-weight: 600;
            font-size: 1.2rem;
            line-height: 2.5rem;
            text-align: left;
        }

        .project-description {
            font-weight: 400;
            font-size: 1rem;
            line-height: 2rem;
            text-align: left;
        }

        .project {
            margin-bottom: 100px;
        }
    }

    .project-cover {
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
        border-radius: 25px;
        transition: all 200ms ease;
    }

    .project-cover:hover {
        box-shadow: 7px 7px 33px 0 rgba(0, 0, 0, 0.15);
        cursor: pointer;
    }
</style>
