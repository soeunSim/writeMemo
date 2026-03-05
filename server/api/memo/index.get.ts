export default defineEventHandler(() :ResponseStructure<ResponsePagenation<MemoListStructure[]>> => {
  let getData :MemoListStructure[] = [];

  for (let i = 1; i <= 5; i += 1) {
    getData.push({ 
      id: i, 
      title: `${i} 번째 제목 입니다.` ,
      writer: "김감자",
      createDateTime: new Date().toDateString(),
    });
  }

  return {
    code: "S001",
    payload: {
      lange: 5,
      content: getData,
      pagenation: {
        currentCount:1,
        currentPage: 1,
        totalCount:5,
        totalPage: 2
      }
    }
  }
});