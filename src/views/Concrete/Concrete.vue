<template>
  Concrete
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ConcreteDataService from "@/service/ConcreteData.service";
import ResponseData from "@/types/ResponseData.interface";
export default defineComponent({
  data() {
    return {};
  },
  methods: {
    getConcrete() {
      let concreteId = this.$route.params.id as string;
      ConcreteDataService.get(concreteId)
        .then((response: ResponseData) => {})
        .catch((e: Error) => {});
    },
  },
  mount() {
    this.getConcrete();
  },
});
</script>
