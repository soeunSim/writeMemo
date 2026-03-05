export default defineEventHandler((event) :ResponseStructure<MemoDeatilStructure> => {
  const parms = event.context.params as { id : string};
  const idParms = parms.id;
  const id = Number(idParms);

  return {
    code: "S001",
    payload: {
      id,
      title:`${id}번째 제목입니다.`,
      writer: "ddd",
      createDateTime: "ddd",
      modtfiyDateTime: null,
      contentText: "ddd"
    }
  }
})