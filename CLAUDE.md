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
--color-primary:          #01BD70        /* 그린 포인트 */
--color-primary-rgb:      1 189 112      /* rgba() 투명도 조합에 사용 */
--color-border:           #4A4A4A
--color-bg-page:          #373737
--color-bg-page-rgb:      55 55 55
--color-bg-card:          #3F3F3F
--color-bg-card-hover:    #484848
--color-bg-btn:           #424242
--color-text:             #FFFFFF
--color-text-medium:      #C8C8C8
--color-text-muted:       #909090
--color-text-subtle:      #707070
--color-white:            #ffffff
```

### 레이아웃 컨테이너

```css
.app-root          /* min-h-screen, bg, font-family */
.hero-section      /* pt-20 sm:pt-28, pb-16 sm:pb-24, border-b (그라데이션 없음) */
.portfolio-section /* py-12 sm:py-20, border-b (Projects 사용) */
.reveal / .is-visible  /* 스크롤 진입 시 fade+slide 애니메이션 */
max-w-6xl mx-auto px-4 sm:px-6   /* 모든 섹션 내부 컨테이너 */
```

### Hero / About 섹션 (`hero.css`)

```css
/* 2컬럼 레이아웃 */
.about-layout      /* flex-col → sm: flex-row, gap 3rem, mb 5rem */
.about-intro       /* flex: 1, 왼쪽 영역 */
.about-card        /* 오른쪽 프로필 카드, 18rem, bg-card, border, rounded-xl */

/* 소개 */
.about-headline    /* 2.25rem → sm:3rem, font-bold, mb 4.25rem (뱃지 제거됨) */
.about-name        /* color-primary */
.about-bio p       /* 1rem → sm:1.0625rem, line-height 1.75 */

/* 프로필 카드 내부 */
.about-card-name / .about-card-title
.about-stats       /* 경력 수치 표시 */
.about-card-links  /* 버튼형 링크 3행 (border + bg-btn) */
.about-card-link   /* 이메일: 클립보드 복사 기능, fade 애니메이션 */
.about-card-link-inner  /* 이메일 버튼 내부 fade wrapper */

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
.section-label     /* 1.375rem, font-bold, pl 0.75rem, color-text */
.section-title     /* 1.75rem sm:2.25rem, font-bold, color-text */
.period-label      /* font-mono, 0.875rem, color-primary */
```

### Experience 요소 (`experience.css`)

```css
/* 경력 카드 래퍼 */
.section-bg-card   /* bg-card, border, rounded-xl, padding 1.25rem → sm:1.5rem 2rem */

/* 경력 */
.career-dot-wrapper / .career-dot  /* 타임라인 점 (primary glow) */
.career-line        /* primary → transparent 그라데이션 세로선 */
.career-item        /* flex-col gap-2 */
.career-company     /* font-semibold, 1.25rem */
.career-rank        /* 0.875rem, color-text-muted, items-baseline 정렬 */
.career-role        /* 0.9375rem, line-height 1.75, color-text-medium */
.career-projects    /* flex-wrap, gap 0.375rem, mt 0.625rem */
.career-project-tag /* 0.8125rem, primary 계열 border/bg, color-text-medium */

/* 자격증 (카드 배경 없음, flex-wrap 나열) */
.cert-card          /* px-3 py-1.5, border primary 계열, 0.875rem */
.cert-dot           /* w-1.5 h-1.5, primary */

/* 교육 */
.edu-grid           /* 1열 sm:2열 grid */
.edu-card           /* rounded-lg p-4, bg-card, border-l primary 50%, gap-2 */
.edu-name           /* font-semibold, 1.25rem */
.edu-organizer      /* 0.75rem, color-text-subtle */
.edu-content        /* 0.875rem, line-height 1.85, color-text-medium */
```

### Projects 섹션 (`projects.css`)

```css
.project-header       /* flex items-center gap-5, border-left 3px primary, pl-1.25rem */
.project-logo         /* 4rem sm:4.75rem, rounded-lg, bg-white */
.project-title        /* font-semibold, 1.375rem sm:1.5rem */
.project-description  /* 1rem, line-height 1.7, color-text-medium */
.project-tech-badge   /* text-xs, font-mono, border, bg-card (skillColorMap으로 색상 적용) */

/* Feature 인터랙션 */
.feature-panel        /* 모바일: flex-col / sm: flex-row */
.feature-list         /* sm: width 50%, space-y-3, 항목별 box-shadow */
.feature-item / .feature-item--active  /* 활성 시 chevron 아이콘 표시 */
.feature-chevron      /* 선택된 항목에만 primary 색상으로 표시 */
.feature-detail-inline / --open  /* 모바일 아코디언 */
.feature-detail-panel            /* sm: 우측 고정 패널, featurePanelIn 애니메이션, box-shadow */
.feature-detail-title /* 0.75rem, color-text-muted (캡션 수준) */
.feature-detail-body  /* 0.875rem, line-height 1.85, color-text */
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

### Scroll Reveal (`App.tsx`)
`.reveal` 클래스 요소를 전역 `IntersectionObserver`로 감지 → `is-visible` 추가 → `opacity 0 + translateY(28px)` → 보이는 상태로 전환. `data-delay` 속성으로 stagger 지원.

### 이메일 복사 (`Hero.tsx`)
버튼 클릭 → fade-out(150ms) → 클립보드 복사 → "복사 완료" 표시 → 2초 후 fade-out → 원래 이메일로 복귀.

### Feature 인터랙션 (`Projects.tsx`)
`selected: Record<프로젝트인덱스, 피처인덱스>` 상태로 관리.
- 모바일: `.feature-detail-inline` 아코디언 (grid-template-rows 트릭)
- 데스크탑(sm:): `.feature-detail-panel` 우측 고정 패널 + featurePanelIn 애니메이션
- 선택된 항목에 `ChevronRight` 아이콘 표시

### 기술 스택 색상 (`portfolio.ts`)
`skillColorMap`: skills 데이터 + 미등록 기술(Thymeleaf, Vue, Tibero, Corebase) 포함. Projects.tsx에서 뱃지 인라인 스타일에 활용.

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
- 프로필 카드: 사진·이름·직함·연락처 버튼형 링크 3행

**P3. Projects feature-panel 위계 명확화**
- 좌측 feature 타이틀 font-weight 500 강화
- 우측 패널 타이틀 0.75rem muted 캡션 수준으로 축소
- 선택된 항목에 ChevronRight 아이콘 표시

**P4. 프로젝트 섹션 볼륨감 확대**
- `project-logo` 4rem sm:4.75rem으로 확대
- `project-header` gap/padding 확대, 프로젝트 간격 space-y-16/24

**스타일 전반 정비**
- 배경색 `#373737`, 포인트색 `#01BD70`으로 변경
- 카드 우하단 그림자 통일 (`3px 3px 8px rgb(0 0 0 / 0.15)`)
- 폰트 위계 점검 및 정렬 (section-label 1.375rem, section-title 1.75/2.25rem)
- 행간 정비: edu-content/feature-detail-body 1.85, career-role 1.75
- 스크롤 reveal 애니메이션 추가
- 이메일 클립보드 복사 기능 + fade 애니메이션
- 프로젝트 기술 뱃지 skillColorMap 색상 연동

---

## 진행 중 / 예정

### P5. 전체 배경 개선

**문제:** 단색 `#373737` 배경이 심심하게 느껴짐.

**방향 (미결정):**
- 서브틀한 패턴/텍스처 추가
- 섹션별 배경 변화로 리듬감 부여

**영향 파일:** `index.css`, `hero.css`

---

### P6. 자격증 섹션 처리

**문제:** 현재 flex-wrap 뱃지 나열 방식이 경력·교육 섹션에 비해 볼륨감이 없어 위치나 형식이 애매함.

**방향 (미결정):**
- 카드형으로 변경
- 위치 재배치 (교육 앞 또는 기술스택 옆)

**영향 파일:** `Hero.tsx`, `experience.css`

---

### P7. 프로젝트 목록/상세 타이틀 처리

**문제:** feature 항목 타이틀과 우측 상세 패널의 타이틀이 시각적으로 애매한 상태.

**방향 (미결정):**
- 상세 패널 타이틀 제거 또는 별도 강조 방식 재검토

**영향 파일:** `Projects.tsx`, `projects.css`
