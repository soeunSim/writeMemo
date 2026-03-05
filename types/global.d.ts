type Sucesses = "S001";

// api 응답 구조체
interface ResponseStructure <T = unknown> {
  code : Sucesses;
  payload : T;
}

// 페이지네이션 응답 구조체
interface ResponsePagenation <T = unknown> {
  lange: number;
  content: T;
  pagenation: {
    currentPage: number;
    currentCount: number;
    totalPage: number;
    totalCount: number;
  }
}