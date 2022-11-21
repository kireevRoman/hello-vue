<template>
  <div class="user">
    <div v-if="isLoading">Loading...</div>

    <div v-else-if="errors">{{ errors }}</div>

    <template v-else-if="user">

      <div class="user__card">
        <img class="user__card-image" :src="user.image" alt="аватарка пользователя">
        <div class="user__card-body">
          <h1>{{ user.firstName }} {{ user.lastName }}</h1>
          <p>{{ user.email }}</p>
          <p>{{ user.phone }}</p>
        </div>

      </div>

      <app-accordion title="Обо мне" class="user__accordion">
        <ul>
          <li>
            <strong> возраст: </strong> {{ user.age }}
          </li>
          <li>
            <strong> пол: </strong> {{ user.gender }}
          </li>
          <li>
            <strong> рост: </strong> {{ user.height }}
          </li>
          <li>
            <strong> вес: </strong> {{ user.weight }}
          </li>
          <li>
            <strong> цвет глаз: </strong> {{ user.eyeColor }}
          </li>
        </ul>
      </app-accordion>

      <app-accordion title="Место работы">
        <ul>
          <li>
            <strong> название: </strong> {{ user.company.name }}
          </li>
          <li>
            <strong> отдел: </strong> {{ user.company.department }}
          </li>
          <li>
            <strong> должность: </strong> {{ user.company.title }}
          </li>
        </ul>
      </app-accordion>

      <app-accordion title="Устройство входа">
        <ul>
          <li> {{ user.userAgent }}</li>
        </ul>
      </app-accordion>

    </template>

  </div>
</template>

<script>
import AppAccordion from "@/components/UI/AppAccordion";
import {mapActions, mapState} from "vuex";

export default {
  name: "AboutPage",
  components: {AppAccordion},

  mounted() {
    this.fetchUser()
  },

  methods: {
    ...mapActions("user", ["fetchUser"])
  },

  computed: {
    ...mapState({
      user: state => state.user.user,
      isLoading: state => state.user.isLoading,
      errors: state => state.user.errors,
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.user {
  display: flex;
  flex-direction: column;
  flex: 1;

  &__card {
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border-radius: $defaultRadius;
    padding: 20px;

    &-image {
      width: 80px;
      height: 80px;
      object-fit: cover;
      object-position: center;
      margin-right: 20px;
    }

    &-body {
      display: flex;
      flex-direction: column;

      > h1 {
        margin-bottom: 12px;
      }

      > p {
        color: $secondaryColor;
        line-height: 150%;
      }
    }
  }

  ul li {
    font-size: 20px;
    line-height: 150%;
    color: $secondaryColor;
  }

  > * {
    margin-bottom: 40px;
  }
}
</style>