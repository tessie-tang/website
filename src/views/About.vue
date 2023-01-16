<template>
    <div>
        <Header color="#1A73DC"/>

        <Container>
          <div class="columns">
            <ImageFrame class="column" :src="base_url + '/origin/cover.jpg'" :placeholder="base_url + '/compress/cover.jpg'" />
            <div class="column">
              <p class="title">Hi, I'm Xinyi Tang 👋 (She/her/hers)</p>
              <p class="content">(Pinyin: xīn-yí.  Sound close to "Cin-Yee") </p>
              <p class="content">A product designer who has launched multiple <u>enterprise software</u> in industries such as manufacturing and public work. Currently, I'm leading the design of a SaaS platform for chemical factory safety management at <u>PKchem LLC</u> with a mobile productivity app and desktop dashboard.</p>
              <p class="content">
                <strong>As a designer, my superpowers are:</strong><br />
                1. Lead in-depth <strong>field research</strong> that dives deep into the inner workings of organizations.<br />
                2. Drive <strong>decision-making process</strong> with stakeholders and design team members.<br />
                3. Deliver <strong>enterprise-level UI</strong> with data visualization, social, and work-related features.
              </p>
              <p class="content">
                <strong>Outside of work,</strong><br />
                🌼 I draw <strong>oil painting</strong> of beautiful sceneries.<br />
                🖊️ I write <strong>Chinese calligraphy</strong> with paint and brushes.<br />
                ☕️ I love coffee with tiramisu.<br />
                🧘 Yoga is my life
              </p>
            </div>
          </div>
        </Container>

        <Container>
          <ImageFrame class="column" :src="base_url + '/origin/main.jpg'" :placeholder="base_url + '/compress/main.jpg'" />
        </Container>

        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '../components/Footer.vue'
import ImageFrame from '../components/ImageFrame.vue'
import Container from '../components/Container.vue'

export default {
  name: 'ShangHai',
  components: {
    Header,
    Footer,
    ImageFrame,
    Container
  },
  data () {
    return {
      base_url: 'https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/about'
    }
  }
}
</script>

<style scoped>
  @import './styles/project.css';
</style>
