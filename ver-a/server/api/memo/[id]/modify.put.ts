export default defineEventHandler((event) :ResponseStructure<MemoModifyStructure> =>{
  const parms = event.context.params as { id : string};
  const idParms = parms.id;
  const id = Number(idParms);

  return {
    code:"S001",
    payload: {
      id,
      title: "-",
      contentText: "-"
    }
  }
});