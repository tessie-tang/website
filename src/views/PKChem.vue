<template>
    <div>
        <vue-scroll-progress-bar height="0.25rem" backgroundColor="#DC601A" />
        <Header color="#DC601A" />
        <ProjectCover :cover="cover" />

        <!-- OVERVIEW -->
        <Container class="chapter">
          <p class="title">{{overview.h1}}</p>
          <p class="content" v-html="overview.p1" />
          <!-- IMAGE -->
          <div class="columns">
            <div v-for="(img1, i) in overview.img1" :key="`overview_img1_${i}`" class="column">
              <ImageFrame :src="base_url + '/origin/' + img1.url" :placeholder="base_url + '/compress/' + img1.url" ratio="5by4"></ImageFrame>
              <p>{{img1.title}}</p>
            </div>
          </div>
        </Container>

        <Container class="chapter">
          <p class="title">{{overview.h2}}</p>
          <p class="content" v-html="overview.p2" />
          <Note color="#ffccbc">
            <p class="note" v-html="overview.note2" />
          </Note>
        </Container>

        <Container class="chapter">
          <p class="title">{{overview.h3}}</p>
          <p class="content" v-html="overview.p3_a" />
          <ImageFrame :src="base_url + '/origin/' + overview.img3_a" :placeholder="base_url + '/compress/' + overview.img3_a" />
          <p class="content" v-html="overview.p3_b" />
          <ImageFrame :src="base_url + '/origin/' + overview.img3_b" :placeholder="base_url + '/compress/' + overview.img3_b" />
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

        <!-- RESEARCH PROCESS -->
        <Container class="chapter">
          <p class="title">{{research_process.h1}}</p>
          <p class="content" v-html="research_process.p1" />
          <!-- IMAGES -->
          <div v-for="(col, i) in research_process.img1" :key="`research_process_img1_row_${i}`" class="columns">
            <div v-for="(img1, j) in col" :key="`research_process_img1_row_${i}_col_${j}`" class="column">
              <ImageFrame v-if="col.length == 2" data-aos="fade-up" data-aos-duration="800" :src="base_url + '/origin/' + img1" :placeholder="base_url + '/compress/' + img1" ratio="2by1" />
              <ImageFrame v-else data-aos="fade-up" data-aos-duration="800" :src="base_url + '/origin/' + img1" :placeholder="base_url + '/compress/' + img1" ratio="4by1" />
            </div>
          </div>
        </Container>

        <Container class="chapter">
          <p class="title">{{research_process.h2}}</p>
          <p class="content" v-html="research_process.p2" />
          <!-- COMPARE -->
          <div class="columns">
            <div class="column">
              <p class="subtitle">{{research_process.compare2.inspector.title}}</p>
              <p class="note">
                <span v-for="(val, key) in research_process.compare2.inspector.list" :key="`research_process_manager_list_${key}`">
                  <strong>{{key + 1}}. </strong>{{val}}<br>
                </span>
              </p>
            </div>
            <div class="column">
              <p class="subtitle">{{research_process.compare2.manager.title}}</p>
              <p class="note">
                <span v-for="(val, key) in research_process.compare2.manager.list" :key="`research_process_manager_list_${key}`">
                  <strong>{{key + 1}}. </strong>{{val}}<br>
                </span>
              </p>
            </div>
          </div>
        </Container>

        <Container class="chapter">
          <p class="title">{{research_process.h3}}</p>
          <p class="content" v-html="research_process.p3" />
          <Note color="#ffccbc">
            <p class="note" v-html="research_process.note3" />
          </Note>
          <!-- IMAGES -->
          <div class="columns">
            <div v-for="(img3, i) in research_process.img3" :key="`research_process_img3_${i}`" class="column">
              <ImageFrame :src="base_url + '/origin/' + img3" :placeholder="base_url + '/compress/' + img3" ratio="5by4"></ImageFrame>
            </div>
          </div>
          <!-- INTERVIEWS -->
          <p class="subtitle">{{research_process.interviews3.title}}</p>
          <div v-for="(interview3, i) in research_process.interviews3.list" :key="`research_process_interviews3_list_${i}`">
            <p class="note interview" v-html="interview3.content" />
            <p class="note interview interview-author">- {{interview3.author}}</p>
          </div>
       </Container>

        <Container class="chapter">
          <p class="title">{{research_process.h4}}</p>
          <p class="content" v-html="research_process.p4" />
          <p class="subtitle">{{research_process.features4.title}}</p>
          <div v-for="(feature, i) in research_process.features4.list" style="margin-bottom: 60px" :key="`research_process_features4_list_${i}`" class="columns">
            <div class="column is-6">
              <p class="note"><strong>{{feature.title}}</strong></p>
              <p class="note" v-html="feature.content"></p>
            </div>
            <div class="column is-6">
              <ImageFrame :src="base_url + '/origin/' + feature.img" :placeholder="base_url + '/compress/' + feature.img" :description="feature.img_description" />
            </div>
          </div>
        </Container>

        <Container class="chapter">
          <p class="title">{{research_process.h5}}</p>
          <p class="content" v-html="research_process.p5" />
          <!-- IMAGE -->
          <ImageFrame :src="base_url + '/origin/' + research_process.img5" :placeholder="base_url + '/compress/' + research_process.img5" :description="research_process.img5_description" />
          <!-- KEY FINDINGS -->
          <p class="subtitle">{{research_process.key_findings5.title}}</p>
            <p class="note">
              <span v-for="(val, key) in research_process.key_findings5.list" :key="`research_process_key_findings5_${key}`">
                <strong>{{key + 1}}. </strong><span v-html="val" /><br>
              </span>
            </p>
        </Container>

        <Divider />

        <Container class="chapter">
          <p class="title">{{insights.h1}}</p>
          <p class="content" v-html="insights.p1" />
          <ImageFrame :src="base_url + '/origin/' + insights.img1" :placeholder="base_url + '/compress/' + insights.img1" />
        </Container>

        <Container class="chapter">
          <p class="title">{{insights.h2}}</p>
          <p class="content" v-html="insights.p2" />
          <ImageFrame :src="base_url + '/origin/' + insights.img2" :placeholder="base_url + '/compress/' + insights.img2" />
        </Container>

        <Divider />

        <Container class="chapter">
          <p class="title" style="margin-bottom: 50px;">{{design_process.h1}}</p>
          <p class="subtitle">1. {{design_process.h2}}</p>
          <p class="content" v-html="design_process.p2" />
        </Container>

        <Container class="chapter">
          <p class="subtitle">2. {{design_process.h3}}</p>
          <p class="content" v-html="design_process.p3" />
          <ImageFrame :src="base_url + '/origin/' + design_process.img3" :placeholder="base_url + '/compress/' + design_process.img3" />
        </Container>

        <Container class="chapter">
          <p class="subtitle">3. {{design_process.h4}}</p>
          <p class="content" v-html="design_process.p4" />
        </Container>

        <Container class="chapter">
          <p class="subtitle">4. {{design_process.h5}}</p>
          <p class="content" v-html="design_process.p5" />
          <!-- features -->
          <p class="subtitle">{{design_process.feature5.title}}</p>
          <div v-for="(list, i) in design_process.feature5.list" :key="`design_process_list4_${i}`" class="columns" style="margin-bottom: 50px">
            <ImageFrame :src="base_url + '/origin/' + list.img" :placeholder="base_url + '/compress/' + list.img" class="column" />
            <div class="column">
              <p class="content" style="margin-bottom: -0.4rem"><strong>{{list.title}}</strong></p>
              <p class="content" v-html="list.content" />
            </div>
          </div>
        </Container>

        <Divider />

        <Container class="chapter">
          <p class="title">{{next_step.title}}</p>
          <p class="content" v-html="next_step.content" />
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
  name: 'PKChem',
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
    return store.state.pkchem
  }
}
</script>

<style scoped>
  @import './styles/project.css';
</style>
