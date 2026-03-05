<template>
  <main class="page-main">
    <div class="area-main">
      <h1>게시판 목록입니다.</h1>

      <NuxtLink to="/create">create</NuxtLink>

      <div v-if="memoListData !== null " class="box-content">
        <NuxtLink v-for="item in memoListData.payload.content" class="group-content">
          <span>No. {{ item.id }}</span>
          <span class="title">{{ item.title }}</span>
          <span>{{ item.writer }}</span>
          <span>{{ item.createDateTime }}</span>
        </NuxtLink>

        <div class="group-btn">
          <NuxtLink to="/$">1</NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  const route = useRoute();
  
  const currentBoard = ref<string | null>(null);
  
  const {data: memoListData} = await useAsyncData<ResponseStructure<ResponsePagenation<MemoListStructure[]>>>(`memo-${currentBoard}`, () => $fetch<ResponseStructure<ResponsePagenation<MemoListStructure[]>>>(`/api/memo`));
useSeoMeta({
  title: "목록입니다.",
  ogTitle: "목록입니다"
})
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;

  .page-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100vh;
    background: lightgray;

    .area-main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      width: 550px;
      padding: 80px 40px;
      background: white;
      border-radius: 30px;

      .box-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width:100%;

        .group-content {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          width: 100%;

          .title {
            flex: 1;
          }
        }
      }
    }
  }
}
</style>