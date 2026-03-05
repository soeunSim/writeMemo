export default defineEventHandler((event) :ResponseStructure<MemoDeatilStructure> => {
  const parms = event.context.params as { id : string};
  const idParms = parms.id;
  const id = Number(idParms);
  
  return {
    code: "S001",
    payload: {
      id,
      title: "성공적인 제목",
      writer: "성공",
      contentText: "아무튼 성공적인내용이죠",
      createDateTime: new Date().toDateString(),
      modtfiyDateTime: null,
    }
  }
});