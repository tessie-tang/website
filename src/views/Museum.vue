<template>
    <div>
        <vue-scroll-progress-bar height="0.25rem" backgroundColor="#5e35b1" />
        <Header color="#5e35b1"/>
        <ProjectCover :cover="cover"/>

        <Container class="chapter">
            <p class="title">{{background.h1}}</p>
            <p class="content" v-html="background.p1" />
        </Container>

        <Divider />

        <Container class="chapter">
            <p class="title">{{research_process.h1}}</p>
            <p class="subtitle">1. {{research_process.h2}}</p>
            <p class="content" v-html="research_process.p2" />
        </Container>

        <Container class="chapter">
            <p class="subtitle">2. {{research_process.h3}}</p>
            <div v-for="(v, i) in research_process.competitive_analysis3" :key="`research_process_competitive_analysis3_${i}`" class="columns" style="margin-bottom: 50px">
              <ImageFrame :src="base_url + '/origin/' + v.img" :placeholder="base_url + '/compress/' + v.img" class="column" />
              <div class="column">
                <p class="content" style="margin-bottom: -0.4rem"><strong>{{v.title}}</strong></p>
                <p class="content" v-html="v.content" />
              </div>
            </div>
        </Container>

        <Container class="chapter">
            <p class="subtitle">3. {{research_process.h4}}</p>
            <ImageFrame :src="base_url + '/origin/' + research_process.img4" :placeholder="base_url + '/compress/' + research_process.img4" />
        </Container>

        <Container class="chapter">
            <p class="subtitle">4. {{research_process.h5}}</p>
            <ImageFrame :src="base_url + '/origin/' + research_process.img5" :placeholder="base_url + '/compress/' + research_process.img5" />
        </Container>

        <Divider />

        <Container class="chapter">
          <p class="title">{{ideation.h1}}</p>
          <p class="subtitle">{{ideation.solution.title}}</p>
          <Note color="#dbcafc">
            <div v-for="(v, i) in ideation.solution.list" :key="`research_process_competitive_analysis3_${i}`" class="columns" style="margin-bottom: 25px; padding-left: 25px">
              <p class="content">{{i+1}}. {{v}}</p>
            </div>
          </Note>
        </Container>

        <Container class="chapter">
          <ImageFrame :src="base_url + '/origin/' + ideation.gamification.img" :placeholder="base_url + '/compress/' + ideation.gamification.img" style="margin-bottom: 25px" />
          <p class="subtitle">{{ideation.gamification.title}}</p>
          <p class="content">{{ideation.gamification.content}}</p>
        </Container>

        <Container class="chapter">
          <p class="subtitle">{{ideation.theory.title}}</p>
          <ImageFrame :src="base_url + '/origin/' + ideation.theory.img" :placeholder="base_url + '/compress/' + ideation.theory.img" />
        </Container>

        <Divider />

        <Container class="chapter">
          <p class="title">{{design_process.h1}}</p>
          <p class="subtitle">{{design_process.flowchart.title}}</p>
          <ImageFrame :src="base_url + '/origin/' + design_process.flowchart.img" :placeholder="base_url + '/compress/' + design_process.flowchart.img" />
        </Container>

        <Container>
          <p class="subtitle">{{design_process.storyboard.title}}</p>
          <ImageFrame :src="base_url + '/origin/' + design_process.storyboard.img" :placeholder="base_url + '/compress/' + design_process.storyboard.img" />
        </Container>

        <Divider />

        <Container class="chapter">
          <p class="title">{{visual.title}}</p>
          <p class="content">{{visual.content}}</p>
          <ImageFrame :src="base_url + '/origin/' + visual.img" :placeholder="base_url + '/compress/' + visual.img" />
        </Container>

        <Divider />

        <Container class="chapter">
          <p class="title">{{develop.title}}</p>
          <p class="content">{{develop.content}}</p>
          <ImageFrame :src="base_url + '/origin/' + develop.img" :placeholder="base_url + '/compress/' + develop.img" />
        </Container>

        <Divider />

        <Container>
          <p class="title">{{demo.h1}}</p>
          <ImageFrame :src="base_url + '/origin/' + demo.img1" :placeholder="base_url + '/compress/' + demo.img1" />
          <iframe width="800" height="450" src="https://www.youtube.com/embed/axjYZl9KtM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="margin-top: 50px" />
        </Container>

        <Footer />
    </div>
</template>

<script>
import store from '../store'
import Header from '@/components/Header.vue'
import ProjectCover from '@/components/ProjectCover.vue'
import Container from '../components/Container.vue'
import Note from '../components/Note.vue'
import Divider from '../components/Divider.vue'
import ImageFrame from '../components/ImageFrame.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Museum',
  components: {
    Header,
    ProjectCover,
    Container,
    Divider,
    ImageFrame,
    Note,
    Footer
  },
  data () {
    return store.state.museum
  }
}
</script>

<style scoped>
    @import './styles/project.css';
</style>
