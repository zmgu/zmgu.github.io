export interface Career {
  period: string;
  company: string;
}

export interface Education {
  period: string;
  name: string;
  organizer: string;
  content: string[];
}

export interface Feature {
  title: string;
  detail: string;
}

export interface Project {
  name: string;
  period: string;
  image: string;
  description: string;
  stack: string[];
  features: Feature[];
}

export const profile = {
  name: '전민혁',
  title: 'Backend Developer',
  bio: [
    'Java 백엔드를 주력으로, 필요에 따라 프론트엔드까지 담당해온 개발자입니다.',
    '공공기관 상담 시스템 개발 및 운영을 통해 안정성과 유지보수성의 중요성을 느끼며 성장해 왔습니다.',
    '원활한 소통과 읽기 좋은 코드로 동료의 고민을 덜어주는, 함께 일하고 싶은 개발자를 지향합니다.',
  ],
};

export const contact = {
  email: 'manggu94@gmail.com',
  github: 'https://github.com/zmgu',
  blog: 'https://zmgu.tistory.com/',
};

export const skills = {
  work:     ['Java', 'JavaScript', 'eGovFrame', 'SpringBoot', 'JSP', 'JPA', 'MyBatis', 'Oracle', 'MySQL', 'Redis'],
  personal: ['React', 'TypeScript', 'Docker'],
};

export const certifications: string[] = [
  '정보처리기사',
  'SQLD',
  '리눅스 마스터 2급',
];

export const career: Career[] = [
  { period: '2024.01 ~', company: '에이아이커넥트' },
];

export const education: Education[] = [
  {
    period: '2023.07 - 2023.10',
    name: 'TABA',
    organizer: '캠퍼스SW아카데미 사업 티맥스 아카데미',
    content: ['운영체제 이론 & Linux 실습',
              'DB 기초, 설계 및 MySQL, Tibero 실습',
              '인공지능 딥러닝 및 알고리즘 이해와 Python을 통한 실습'
            ],
  },
  {
    period: '2022.11 - 2023.04',
    name: '(디지털컨버전스)자바(JAVA)스프링프레임워크',
    organizer: '이젠컴퓨터아카데미',
    content: ['JAVA & Oracle을 Mybatis로 연동하는 기술',
              'Maven 기반으로 Spring Framework 이해',
              'Network & Linux shell 실습'
            ],
  },
];

export const projects: Project[] = [
  {
    name: '한국관광공사 KOTIS',
    period: '2026.05 - 현재',
    image: '/kotis.jpg',
    description: '작성 예정',
    stack: [''],
    features: [
      { title:  '작성 예정',
        detail: ''
      },
    ],
  },
  {
    name: '외교부 영사안전콜센터',
    period: '2024.01 - 2026.04',
    image: '/mofa.png',
    description: '외부 인터넷이 차단된 폐쇄망 환경에서 운영되는 시스템으로, 제약된 환경 속에서 유지보수 및 신규 기능 개발을 담당',
    stack: ['Java', 'SpringBoot', 'eGovFrame', 'JSP', 'Corebase(자사 프레임워크)', 'Oracle'],
    features: [
      { title:  'Google Maps 클러스터링으로 상담 이력 발신 국가 시각화',
        detail: '상담 이력의 발신 국가 전체 데이터를 조회하여 Google Maps API 클러스터링으로 국가별 건수를 지도에 시각화\n줌 레벨에 따라 동적으로 그룹핑되어 표시되도록 구현'
      },
      { title:  '상담 팀장 이상 권한 상담 이력 및 피드백 조회 페이지 개발',
        detail: '상담원 이력과 미흡한 부분에 대한 피드백을 조회할 수 있는 페이지 신규 개발\n정보 전달 미숙, 상담 유형 오선택 등으로 피드백 항목을 세분화하고 필드를 추가\n상담 팀장 이상 권한에서만 접근 가능하도록 구현'
      },
      { title:  '조치 이력 개인/공용 템플릿 저장 및 불러오기 기능 개발',
        detail: '자주 사용하는 조치 이력 유형을 템플릿으로 저장하고 불러올 수 있는 기능 개발\n상담 팀장 이상 권한의 경우 공용 템플릿으로 저장하여 전체 사용자가 활용 가능하며, 일반 상담원은 개인 템플릿으로만 저장되어 본인에게만 노출되도록 구현'
      },
      { title:  '미등록 통화 이력 알림 기능 개발',
        detail: '1분 주기로 미저장 이력 여부를 체크\n미저장 이력이 존재할 경우 화면 우측 하단에 알림 박스를 표시하도록 구현'
      },
      { title:  '콜·SNS 대기 인원 부족 시 관리자 알림 기능 개발',
        detail: '모든 상담원이 통화 중으로 대기 가능 인원이 0명이 될 경우 헤더에 경고 표시와 함께 알림음이 재생되도록 구현\n크롬 브라우저의 오디오 자동재생 정책을 고려하여 소리 재생 처리'
      },
      { title: '로그인 2차 인증 수단에 카카오 알림톡 채널 추가',
        detail: '기존 SMS 단일 방식에서 알림톡을 추가 지원하도록 개선\n컨트롤러에서 인증 수단에 따라 SMS/알림톡 API로 분기 처리하여 확장 가능한 구조로 구현'
      },
      { title:  '해외로밍 안전문자 작업 이력 비교 조회 기능 개발',
        detail: '기존에는 단일 이력 row를 계속 덮어써 이전 내용과 비교가 불가능했던 구조를 개선\n발송/수정/삭제 작업 시마다 스냅샷 형태로 이력을 적재하도록 변경\n작업 이력 조회 화면에서 동일 키 기준 최근 2개의 이력을 불러와 좌우로 나란히 표시하며, 변경된 항목은 변경 전후 값을 나란히 표기하고 변경되지 않은 항목은 "변경 사항 없음"으로 표시하도록 구현'
      },
      { title:  '문자 발송 이력 페이지 쿼리 성능 개선',
        detail: '제니퍼 모니터링에서 응답 지연이 자주 감지된 쿼리를 개선\n불필요한 필드 조회 제거, WHERE절 날짜 조건의 TO_CHAR 함수 제거, 국가명 테이블 조인 필드에 인덱스 추가\n조회 응답 시간 3초 → 1.5초로 단축'
      },
      { title:  '해외로밍 안전문자 발송 메시지 유니코드 정규식 검증 추가',
        detail: '통신 3사에서 문자 수신 시 2바이트 공백 및 일부 특수문자가 "?"로 표시되거나 이후 내용이 잘리는 문제 발생\n발송 메시지 입력 영역에 정규식을 적용하여 문제가 되는 특정 유니코드를 입력 단계에서 차단하도록 처리'
      },
    ],
  },
];
