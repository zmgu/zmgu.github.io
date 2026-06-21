# 포트폴리오 프로젝트

## 개요

`전민혁` 백엔드 개발자의 정적 포트폴리오 사이트. Vite + React + TypeScript + Tailwind CSS v4 기반이며 GitHub Pages에 배포된다.

- 빌드/개발: `pnpm dev` / `pnpm build`
- Tailwind v4 (`@tailwindcss/vite` 플러그인, `@import 'tailwindcss'`)
- 폰트: Pretendard (CDN, dynamic-subset)

---

## 브랜치 운영

- `main`: 배포 브랜치. push 시 GitHub Actions가 자동으로 GitHub Pages에 배포.
- `dev`: 작업 브랜치. 수정 후 main에 머지할 때만 배포됨.
- **`feedback/` 폴더와 레퍼런스 이미지는 `dev` 브랜치에만 존재해야 하며 `main`에 머지하지 않는다.**

---

## 파일 구조

```
src/
├── main.tsx                        # 진입점
├── App.tsx                         # 루트 컴포넌트 (섹션 조합, scroll spy)
├── data/
│   └── portfolio.ts                # 모든 콘텐츠 데이터
├── components/
│   ├── Header.tsx                  # 고정 헤더, nav scroll spy 표시
│   ├── Footer.tsx                  # 연락처 버튼 모음
│   └── sections/
│       ├── Hero.tsx                # About 섹션 (소개+카드 / 기술스택 / 경력·자격증·교육)
│       ├── Experience.tsx          # 미사용 (App.tsx에서 제거됨, 파일만 존재)
│       └── Projects.tsx            # 프로젝트 목록 (feature 클릭 인터랙션)
└── styles/
    ├── index.css                   # CSS 변수 정의, 전역 설정, 컴포넌트 CSS import
    └── components/
        ├── header.css
        ├── hero.css                # about-*, skill-*, section-label, hero-section 등
        ├── experience.css          # career-*, cert-*, edu-*, section-bg-card
        ├── projects.css            # project-*, feature-* 클래스
        └── footer.css              # footer-*, cta-* 클래스

public/
├── profile.png                     # 프로필 사진
├── kotis.jpg                       # 한국관광공사 로고
├── mofa.png                        # 외교부 로고
└── favicon-*.png

index.html                          # Pretendard CDN 로드, 파비콘 설정
```

---

## 데이터 구조 (`src/data/portfolio.ts`)

콘텐츠 수정은 이 파일만 건드린다.

```ts
profile      // name, title, badge, bio(string[])
contact      // email, github, blog
skills       // SkillCategory[] → { category, color, items: string[] }
stats        // { value, label }[] — 프로필 카드 통계 (현재 경력만)
certifications // string[]
career       // Career[] → { period, company, rank?, role?, projects?: string[] }
education    // Education[] → { period, name, organizer?, content: string[] }
navigation   // [{ id, label }] — 현재 About / Projects 2개
projects     // Project[] → { name, period, image, description, stack, features }
             //   Feature → { title, detail: string[] }
```

---

## CSS 설계

### CSS 변수 (`src/styles/index.css`)

현재 다크모드 단일 테마 (라이트모드 없음).

```css
--color-primary:          #4EFFEA        /* 시안 포인트 */
--color-primary-rgb:      78 255 234     /* rgba() 투명도 조합에 사용 */
--color-border:           #373C44
--color-bg-page:          #212429
--color-bg-page-rgb:      33 36 41
--color-bg-card:          #292D34
--color-bg-card-hover:    #31363E
--color-bg-btn:           #2D3138
--color-text:             #FFFFFF
--color-text-medium:      #C8C8C8
--color-text-muted:       #909090
--color-text-subtle:      #606060
--color-white:            #ffffff
```

### 레이아웃 컨테이너

```css
.app-root          /* min-h-screen, bg, font-family */
.hero-section      /* pt-20 sm:pt-28, border-b, radial-gradient 배경 */
.portfolio-section /* py-8 sm:py-14, border-b (Projects 사용) */
max-w-6xl mx-auto px-4 sm:px-6   /* 모든 섹션 내부 컨테이너 */
```

### Hero / About 섹션 (`hero.css`)

```css
/* 2컬럼 레이아웃 */
.about-layout      /* flex-col → sm: flex-row, gap 3rem, mb 5rem */
.about-intro       /* flex: 1, 왼쪽 영역 */
.about-card        /* 오른쪽 프로필 카드, 18rem, bg-card, border, rounded-xl */

/* 소개 */
.about-badge       /* pill, primary 10% bg */
.about-headline    /* 2.25rem → sm:3rem, font-bold, mb 4rem */
.about-name        /* color-primary */
.about-bio p       /* 1rem → sm:1.0625rem, line-height 1.75 */

/* 프로필 카드 내부 */
.about-card-name / .about-card-title
.about-stats       /* 경력 수치 표시 */
.about-card-links  /* 아이콘 + 주소 3행 */
.about-card-link / .about-card-link-icon

/* 프로필 이미지 */
.profile-ring      /* 9rem, rounded-full, border primary 25% */
.profile-img       /* object-cover, scale(1.5) translate 크롭 */

/* 기술 스택 테이블 */
.skill-section     /* mb 5rem */
.skill-table       /* flex-col, border, rounded-xl, bg-card */
.skill-cat-row     /* flex, padding 0.625rem 1.5rem → sm: 0.75rem 1.75rem */
.skill-cat-label   /* min-width 5.5rem → sm: 7rem */
.skill-cat-dot     /* 0.5rem circle, category color */
.skill-cat-badges  /* flex-wrap, gap 0.5rem */
.skill-badge       /* border/color/bg inline style로 category color 적용 */

/* 섹션 공용 */
.section-label     /* 0.9375rem, pl 0.75rem, color-text-subtle */
.section-title     /* text-2xl sm:text-3xl, font-bold */
.period-label      /* font-mono, 0.75rem, color-primary */
.portfolio-section /* py-8 sm:py-14, border-b */
```

### Experience 요소 (`experience.css`)

```css
/* 경력 카드 래퍼 */
.section-bg-card   /* bg-card, border, rounded-xl, padding 1.25rem → sm:1.5rem 2rem */

/* 경력 */
.career-dot-wrapper / .career-dot  /* 타임라인 점 (primary glow) */
.career-line        /* primary → transparent 그라데이션 세로선 */
.career-item        /* flex-col gap-1 */
.career-company     /* font-semibold, 1.25rem */
.career-rank        /* 0.75rem, color-text-muted, ml 0.75rem */
.career-role        /* 0.9375rem, color-text-medium */
.career-projects    /* flex-wrap, gap 0.375rem, mt 0.625rem */
.career-project-tag /* 0.8125rem, bg-card, border, rounded */

/* 자격증 (카드 배경 없음, flex-wrap 나열) */
.cert-card          /* px-3 py-1.5, border primary 계열, 0.875rem */
.cert-dot           /* w-1.5 h-1.5, primary */

/* 교육 */
.edu-grid           /* 1열 sm:2열 grid */
.edu-card           /* rounded-lg p-4, bg-card, border-l primary 50% */
.edu-name / .edu-organizer / .edu-content
```

### Projects 섹션 (`projects.css`)

```css
.project-header       /* flex items-center gap-4, border-left 3px primary, pl-4 */
.project-logo         /* 3.25rem sm:3.5rem, rounded-md, bg-white */
.project-title        /* font-semibold, 1.25rem sm:1.375rem */
.project-description  /* 1rem, line-height 1.7 */
.project-tech-badge   /* text-xs, font-mono, border, bg-card */

/* Feature 인터랙션 */
.feature-panel        /* 모바일: flex-col / sm: flex-row */
.feature-list         /* sm: width 50% */
.feature-item / .feature-item--active
.feature-detail-inline / --open  /* 모바일 아코디언 */
.feature-detail-panel            /* sm: 우측 고정 패널, featurePanelIn 애니메이션 */
.feature-detail-title / .feature-detail-body
```

### Footer (`footer.css`)

```css
.footer-btn / .footer-icon / .footer-btn-text
.cta-sub / .cta-copyright
```

---

## 주요 동작

### Scroll Spy (`App.tsx`)
`IntersectionObserver`로 섹션(`hero`, `projects`) 진입 감지 → `activeSection` 갱신 → Header nav 활성화.

### Feature 인터랙션 (`Projects.tsx`)
`selected: Record<프로젝트인덱스, 피처인덱스>` 상태로 관리.
- 모바일: `.feature-detail-inline` 아코디언 (grid-template-rows 트릭)
- 데스크탑(sm:): `.feature-detail-panel` 우측 고정 패널 + featurePanelIn 애니메이션

---

## 작업 이력

### 완료

**P1. Hero + Experience 통합**
- 섹션을 `About / Projects` 2개로 단순화
- `Experience.tsx`는 미사용 상태로 남아있음 (삭제 가능)
- Hero.tsx가 소개·기술스택·경력·자격증·교육을 모두 담당

**P2. Hero 재설계**
- 좌(소개글) + 우(프로필 카드) 2컬럼 레이아웃
- 기술 스택: `SkillCategory[]` 구조로 카테고리별 색상 분류 테이블
- 프로필 카드: 사진·이름·직함·연락처 링크 3행
- hero-section에 radial-gradient 배경 추가

**레이아웃/스타일 개선**
- `max-w-5xl → max-w-6xl` 전체 적용
- 섹션명 영문 → 한글 (기술 스택 / 경력 / 자격증 / 교육)
- 경력 데이터에 `rank`, `role`, `projects` 필드 추가
- 자격증: 카드 배경 제거, flex-wrap 뱃지 나열
- 경력: `section-bg-card` 배경 카드 적용
- 기술 스택·경력·자격증·교육 섹션 간격 확대

---

## 진행 중 / 예정

### P3. Projects feature-panel 위계 명확화

**문제:** 데스크탑에서 우측 패널 제목이 좌측 리스트보다 시각적으로 강조되어 관계가 불명확.

**방향 (미결정):**
- A안: 아코디언 통일 — 데스크탑도 모바일과 동일한 방식
- B안: 좌측 feature 타이틀 폰트 강화, 우측 패널 타이틀 축소

**영향 파일:** `Projects.tsx`, `projects.css`

---

### P4. 프로젝트 섹션 볼륨감 확대

**방향:**
- `project-logo` 크기 상향 (현재 3.25rem → 4~5rem)
- `project-header` padding/gap 확대
- 프로젝트 간 간격 상향

**영향 파일:** `projects.css`
