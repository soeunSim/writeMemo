export default defineEventHandler( () :ResponseStructure<{massage: string}>=> {
  
  return {
    code: "S001",
    payload: {
      massage: "삭제성공"
    }
  }
});