export interface Career {
  period: string;
  company: string;
  rank?: string;
  role?: string;
  projects?: string[];
}

export interface Education {
  period: string;
  name: string;
  organizer?: string;
  content: string[];
}

export interface SkillCategory {
  category: string;
  color: string;
  items: string[];
}

export interface Feature {
  title: string;
  detail: string[];
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
  badge: '함께 일하고 싶은 개발자',
  bio: [
    'Java 백엔드를 주력으로, 필요에 따라 프론트엔드까지 담당해온 개발자입니다.',
    '공공기관 상담 플랫폼 개발 및 운영을 통해 안정성과 유지보수성을 중심으로 개발 역량을 키워 왔습니다.',
    '원활한 소통과 읽기 좋은 코드로 동료의 고민을 덜어주는, 함께 일하고 싶은 개발자를 지향합니다.',
  ],
};

export const contact = {
  email: 'manggu94@gmail.com',
  github: 'https://github.com/zmgu',
  blog: 'https://zmgu.tistory.com/',
};

export const skills: SkillCategory[] = [
  { category: '언어',        color: '#4EFFEA', items: ['Java', 'TypeScript'] },
  { category: '프레임워크',   color: '#79B8FF', items: ['SpringBoot', 'eGovFrame', 'React'] },
  { category: 'ORM / 쿼리',  color: '#B392F0', items: ['JPA', 'MyBatis'] },
  { category: '데이터베이스', color: '#85E89D', items: ['Oracle', 'MySQL', 'Redis'] },
  { category: '기타',        color: '#FDAAA9', items: ['JSP', 'Docker'] },
];

export const stats = [
  { value: '2년+', label: '경력' },
];

export const certifications: string[] = [
  '정보처리기사',
  'SQLD',
  '리눅스 마스터 2급',
];

export const career: Career[] = [
  {
    period: '2024.01 ~',
    company: '에이아이커넥트',
    rank: '대리',
    role: '공공기관 상담 플랫폼 백엔드 개발 및 운영',
    projects: ['외교부 영사안전콜센터', '한국관광공사 KOTIS'],
  },
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

export const navigation = [
  { id: 'hero',     label: 'About' },
  { id: 'projects', label: 'Projects' },
] as const;

export const projects: Project[] = [
  {
    name: '한국관광공사 KOTIS',
    period: '2026.05 - 현재',
    image: '/kotis.jpg',
    description: '국내외 관광 안내를 위한 통합 상담 플랫폼이며, 망 분리 환경 기반의 시스템 운영 및 유지보수 담당',
    stack: ['Java', 'SpringBoot', 'eGovFrame', 'Thymeleaf', 'Vue', 'JPA', 'MyBatis', 'Tibero', 'MySQL'],
    features: [
      { title:  '시스템 인수인계를 위한 문서 체계 수립 및 현행화',
        detail: [
          '인수인계 과정에서 현행과 맞지 않는 문서를 전면 재정비',
          '· DB 정의서 / 테이블 정의서 / 컬럼 정의서 / ERD',
          '· 시스템 아키텍처 정의서 / 운영 매뉴얼',
          '· 범정부 메타데이터 현행화',
        ],
      },
      { title:  'TLS 1.0/1.1 취약 버전 비활성화',
        detail: [
          '서버(Apache, Nginx) 및 웹 방화벽(AIWAF) 환경에서 TLS 취약 버전 비활성화 적용',
          '외부 연동 서비스와의 호환성 및 인프라 제약을 검토하여 각 시스템에 적용 가능한 범위로 조치',
        ],
      },
    ],
  },
  {
    name: '외교부 영사안전콜센터',
    period: '2024.01 - 2026.04',
    image: '/mofa.png',
    description: '재외국민 안전을 위한 긴급 대응 상담 플랫폼이며, 폐쇄망 환경 내 시스템 운영 및 유지보수 담당',
    stack: ['Java', 'SpringBoot', 'eGovFrame', 'JSP', 'Corebase(자사 프레임워크)', 'Oracle'],
    features: [
      { title:  'Google Maps API 클러스터링으로 상담 이력 발신 국가 시각화',
        detail: [
          '상담 이력 발신 국가 최근 한달 데이터를 조회하여 Google Maps API 클러스터링으로 국가별 건수를 지도에 시각화',
        ],
      },
      { title:  '상담 팀장 이상 권한 상담 이력 및 피드백 조회 페이지 개발',
        detail: [
          '상담 이력 및 피드백 항목(정보 전달 미숙, 상담 유형 오선택 등)을 세분화하여 팀장 이상 권한에서만 접근 가능한 조회 페이지 신규 개발',
        ],
      },
      { title:  '조치 이력 개인/공용 템플릿 저장 및 불러오기 기능 개발',
        detail: [
          '팀장 이상 권한은 공용 템플릿으로 저장하여 전체 사용자가 활용 가능하고, 일반 상담원은 개인 템플릿으로만 저장되어 본인에게만 노출되도록 권한별 분기 구현',
        ],
      },
      { title:  '미등록 통화 이력 알림 기능 개발',
        detail: [
          '1분 주기로 미저장 이력 여부를 체크',
          '미저장 이력이 존재할 경우 화면 우측 하단에 알림 박스를 표시하도록 구현',
        ],
      },
      { title:  '콜·SNS 대기 인원 부족 시 관리자 알림 기능 개발',
        detail: [
          '모든 상담원이 통화 중으로 대기 가능 인원이 0명이 될 경우 헤더에 경고 표시와 함께 알림음이 재생되도록 구현',
          '크롬 브라우저의 오디오 자동재생 정책을 고려하여 소리 재생 처리',
        ],
      },
      { title:  '로그인 2차 인증 수단에 카카오 알림톡 채널 추가',
        detail: [
          '기존 SMS 단일 방식에서 알림톡을 추가 지원하도록 개선',
          '컨트롤러에서 인증 수단에 따라 SMS/알림톡 API로 분기 처리하여 확장 가능한 구조로 구현',
        ],
      },
      { title:  '해외로밍 안전문자 작업 이력 비교 조회 기능 개발',
        detail: [
          '기존에는 단일 이력 row를 계속 덮어 이전 내용과 비교가 불가능했던 구조를 스냅샷 방식으로 개선하여 이전 이력 보존 및 변경 전후 비교 조회 기능 구현',
        ],
      },
      { title:  '문자 발송 이력 페이지 쿼리 성능 개선',
        detail: [
          '제니퍼 APM 응답 지연 감지를 확인하여 WHERE절 TO_CHAR 함수 제거, 조인 필드 인덱스 추가로 응답 시간 3초 → 1.5초로 단축',
        ],
      },
      { title:  '해외로밍 안전문자 발송 메시지 유니코드 정규식 검증 추가',
        detail: [
          '통신 3사 수신 환경에서 2바이트 공백 및 특수문자가 "?"로 표시되거나 내용이 잘리는 문제를 정규식 검증으로 입력 단계에서 사전 차단',
        ],
      },
    ],
  },
];
