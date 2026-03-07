<template>
  <div class="page-create">
    <div class="area-create">
      <h1>{{ mode === "create" ? "create" : "modify" }}</h1>

      <div class="box-content">
        <div class="group-content">
          <span class="title">제목</span>
          <input v-model="writeData.title" type="text" name="">
        </div>

        <div class="group-content">
          <span class="title">작성자</span>
          <input v-model="writeData.writer" type="text">
        </div>

        <div class="group-content">
          <span class="title">내용</span>
          <textarea v-model="writeData.contentText"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const mode = ref<"create" | "modify">("create");
const memoId = ref<string | null> (null);

const writeData = ref<WriteDataStructure>({
  title: "",
  writer: "",
  contentText:"",
})

// 페이지 존재여부 검증
if (route.params.id !== undefined) {
  if (typeof route.params.id === "string") {
    if (isNaN(Number(route.params.id)) === false) {
      memoId.value = route.params.id;
      mode.value = "modify";
    } else {
      showError( {statusCode : 404});
    }
  }
}

// 수정 모드 일 때 작성값 할당
if(mode.value === "modify") {
  const response = await $fetch(`/api/memo/${memoId}/modify-detail`);
}
</script>