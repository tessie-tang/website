<template>
    <div class="cover">
        <Container>
            <h2>{{cover.slogan}}</h2>
            <h1>{{cover.title}}</h1>
        </Container>
        <Container>
            <b-image class="cover-image" :src="cover.base_url + '/origin/' + cover.image" :placeholder="cover.base_url + '/compress/' + cover.image" :lazy="false" />
        </Container>
        <Divider/>
        <Container class="overview">
            <div class="columns">
                <div class="column" v-for="(col, i) in cover.overview" :key="`overview_row_${i}`">
                    <div v-for="(row, j) in col" :key="`overview_row_${i}_col_${j}`">
                        <p class="overview-content overview-title">{{row.title}}</p>
                        <p class="overview-content">{{row.description}}</p>
                    </div>
                </div>
            </div>
            <div class="columns" v-if="cover.nda">
                <p class="nda column">
                    To comply with my NDA I have omitted confidential information in this case study. All information in this case study is my own and does not reflect the views of {{cover.nda}}.
                </p>
            </div>
        </Container>
        <Divider/>
    </div>
</template>

<script>
import Container from './Container.vue'
import Divider from './Divider.vue'
export default {
  name: 'ProjectCover',
  data () {
    return {}
  },
  props: {
    cover: Object
  },
  components: { Container, Divider }
}
</script>

<style scoped>
    .cover {
        padding-top: 100px;
    }

    .cover img {
        margin-bottom: 0px;
        width: 100%;
    }

    .overview {
        margin-top: 60px;
        margin-bottom: 60px;
    }

    .overview-title {
        font-weight: 700;
        color: #A59D9D;
    }

    @media all and (min-width: 801px) {
        .cover h1 {
            margin-top: 10px;
            font-weight: 700;
            font-size: 2rem;
            line-height: 3rem;
        }

        .cover h2 {
            font-weight: 600;
            font-size: 1.2rem;
        }

        .overview-content {
            font-weight: 500;
            font-size: 1rem;
            line-height: 2rem;
        }

        .nda {
            color: #A59D9D;
            font-weight: 500;
            font-size: 1rem;
            text-align: left;
            margin-top: 2.5rem;
        }
    }

    @media all and (max-width: 800px) {
        .cover h1 {
            margin-top: 10px;
            font-weight: 600;
            font-size: 1.2rem;
            line-height: 2rem;
        }

        .cover h2 {
            font-weight: 500;
            font-size: 0.8rem;
        }

        .overview-content {
            font-weight: 500;
            font-size: 0.8rem;
            text-align: left;
        }

        .nda {
            color: #A59D9D;
            font-weight: 500;
            font-size: 0.8rem;
            text-align: left;
            margin-top: 2rem;
        }
    }
</style>
