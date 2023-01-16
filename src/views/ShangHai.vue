<template>
    <div>
        <vue-scroll-progress-bar height="0.25rem" backgroundColor="#1A73DC" />
        <Header color="#1A73DC"/>
        <ProjectCover :cover="cover"/>

        <!-- OVERVIEW -->
        <Container class="chapter">
          <p class="title">{{overview.h1}}</p>
          <p class="content" v-html="overview.p1" />
          <!-- IMAGE -->
          <div class="columns">
            <div v-for="(img1, i) in overview.img1" :key="`overview_img1_${i}`" class="column">
              <ImageFrame :src="base_url + '/origin/' + img1.url" :placeholder="base_url + '/compress/' + img1.url" ratio="5by4"></ImageFrame>
              <p class="sh-blue">{{img1.title}}</p>
            </div>
          </div>
        </Container>

        <Container class="chapter">
          <p class="title">{{overview.h2}}</p>
          <p class="content" v-html="overview.p2" />
          <ImageFrame :src="base_url + '/origin/' + overview.img2.url" :placeholder="base_url + '/compress/' + overview.img2.url" :description="overview.img2.description" />
        </Container>

        <Container class="chapter">
          <p class="title">{{overview.h3}}</p>
          <p class="content" v-html="overview.p3" />
        </Container>

        <Container class="chapter">
          <p class="title">{{overview.h4}}</p>
          <p class="content">
            <span v-for="(val, key) in overview.list4" :key="`overview_h4_${key}`">
              <strong>{{key + 1}}. </strong>{{val}}<br>
            </span>
          </p>
        </Container>

        <Divider />

        <Container class="chapter">
          <p class="title">{{timeline.h1}}</p>
          <ImageFrame :src="base_url + '/origin/' + timeline.img1" :placeholder="base_url + '/compress/' + timeline.img1" ></ImageFrame>
        </Container>

        <Container class="chapter">
            <div class="columns">
                <div class="column">
                    <p class="title">{{timeline.h2}}</p>
                    <p class="content" v-html="timeline.p2" />
                </div>
                <ImageFrame class="column" :src="base_url + '/origin/' + timeline.img2.url" :placeholder="base_url + '/compress/' + timeline.img2.url" :description="timeline.img2.description" />
            </div>
        </Container>

        <Divider />

        <Container class="chapter">
          <p class="title" style="margin-bottom: 50px;">{{research_process.h1}}</p>
          <p class="subtitle" v-html="research_process.h2" />
          <p class="content" v-html="research_process.p2" />
          <p class="subtitle" v-html="research_process.interview2.h1" />
          <ImageFrame :src="base_url + '/origin/' + research_process.interview2.img1" :placeholder="base_url + '/compress/' + research_process.interview2.img1" />

          <p class="subtitle">{{research_process.interview2.h2}}</p>
          <div class="columns" v-for="(interview2, i) in research_process.interview2.list2" :key="`research_process_interviews3_list_${i}`">
            <ImageFrame class="column" :src="base_url + '/origin/' + interview2.img" :placeholder="base_url + '/compress/' + interview2.img"  ratio="5by3" />
            <p class="note interview column" v-html="interview2.content" />
          </div>
        </Container>

        <Container class="chapter">
          <p class="subtitle">{{research_process.h3}}</p>
          <p class="content" v-html="research_process.p3" />
        </Container>

        <Divider />

        <Container class="chapter">
          <p class="title">{{insights.h1}}</p>
          <p class="content" v-html="insights.p1" />
          <ImageFrame class="column" :src="base_url + '/origin/' + insights.img1" :placeholder="base_url + '/compress/' + insights.img1" />
        </Container>

        <Divider />

        <Container class="chapter">
            <p class="title">{{ideation.h1}}</p>
            <p class="content" v-html="ideation.p1" />
            <p class="subtitle">{{ideation.h2}}</p>
            <b-table :data="ideation.table2.data" :columns="ideation.table2.columns" style="text-align: left" />
        </Container>

        <Divider />

        <Container class="chapter">
            <p class="title" style="margin-bottom: 50px;">{{design_process.h1}}</p>
            <div class="columns">
                <div class="column">
                    <p class="subtitle" v-html="design_process.h2" />
                    <p class="content" v-html="design_process.p2" />
                </div>
                <ImageFrame class="column" :src="base_url + '/origin/' + design_process.img2.url" :placeholder="base_url + '/compress/' + design_process.img2.url" :description="design_process.img2.description" />
            </div>
        </Container>

        <Container class="chapter">
            <p class="title">{{design_process.h3}}</p>
            <p class="content" v-html="design_process.p3" />
            <ImageFrame :src="base_url + '/origin/' + design_process.img3.url" :placeholder="base_url + '/compress/' + design_process.img3.url" :description="design_process.img3.description" />
        </Container>

        <Container class="chapter">
            <p class="title">{{design_process.h4}}</p>
            <div v-for="(list, i) in design_process.list4" :key="`design_process_list4_${i}`" class="columns" style="margin-bottom: 50px">
              <ImageFrame :src="base_url + '/origin/' + list.img" :placeholder="base_url + '/compress/' + list.img" class="column" />
              <div class="column">
                <p class="content" style="margin-bottom: -0.4rem"><strong>{{list.title}}</strong></p>
                <p class="content" v-html="list.content" />
              </div>
            </div>
        </Container>

        <Container class="chapter">
          <p class="title">{{design_process.h5}}</p>
          <!-- COLORS -->
          <p class="subtitle">{{design_process.colors5.title}}</p>
          <div class="columns is-multiline">
            <div v-for="(color, i) in design_process.colors5.list" :key="`design_process_colors5_list_${i}`" class="column is-4 columns" style="padding-left: 1.5em; padding-right: 1.5em">
              <div class="color_block" :style="{'background-color': color.color}" />
              <div class="column">
                <p class="note">
                  <strong>{{color.content}}</strong>
                  <br>
                  {{color.color}}
                </p>
              </div>
            </div>
          </div>
          <!-- ICON & TOPOGRAPHY -->
          <div class="columns">
            <div class="column">
              <p class="title">{{design_process.icon5.title}}</p>
              <ImageFrame :src="base_url + '/origin/' + design_process.icon5.img" :placeholder="base_url + '/compress/' + design_process.icon5.img" class="visual_img" />
            </div>
            <div class="column">
              <p class="title">{{design_process.topography5.title}}</p>
              <ImageFrame :src="base_url + '/origin/' + design_process.topography5.img" :placeholder="base_url + '/compress/' + design_process.topography5.img" class="visual_img" />
            </div>
          </div>
        </Container>

        <Divider />

        <Container class="chapter">
            <p class="title">{{takeways.title}}</p>
            <div v-for="(takeaway, i) in takeways.list" class="columns" :key="`takeways_${i}`">
                <p class="content column is-4"><strong>{{takeaway.title}}</strong></p>
                <p class="content column is-8" v-html="takeaway.content" />
            </div>
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
  name: 'ShangHai',
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
    return store.state.shanghai
  }
}
</script>

<style scoped>
    @import './styles/project.css';

    .interview {
        color: #A59D9D;
        font-style: italic;
    }

    .color_block {
      width: 5.5rem;
      height: 5.5rem;
      border: 1px solid #000;
    }

    @media all and (min-width: 801px) {
      .visual_img {
        margin-right: 150px;
      }
    }
</style>
