// 메모 리스트 구조체
interface MemoListStructure {
  id : number;
  title: string;
  writer: string;
  createDateTime: string;
}

// 메모 상세보기 구조체
interface MemoDeatilStructure {
  id: number;
  title: string;
  writer: string;
  createDateTime: string;
  modtfiyDateTime : string | null;
  contentText: string;
}

// 메모 수정시 구조체 
interface MemoModifyStructure {
  id: number;
  title: string;
  contentText: string;
}

// 메모 사용자 등록 구조체
interface WriteDataStructure {
  title: string;
  writer?: string; // 저희 팀 컨벤션은 타입 지정할때 있을수도 있고 없고 일때는 명확히 null을 지양하는건지?
  contentText: string;
}