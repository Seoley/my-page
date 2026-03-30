# 이설의 포트폴리오

AI 엔지니어 이설의의 개인 포트폴리오 사이트입니다.

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: TailwindCSS
- **Deployment**: GitHub Pages

## 주요 기능

- 프로젝트 상세 페이지 (Content Collections 기반)
- 반응형 디자인 (모바일/데스크톱)
- 이미지 Lightbox 모달
- 스크롤 고정 사이드바

## 프로젝트 구조

```
src/
├── components/      # Astro 컴포넌트
├── content/
│   └── projects/    # 프로젝트 마크다운 파일
├── layouts/         # 레이아웃 컴포넌트
├── pages/           # 페이지 라우팅
│   ├── index.astro
│   ├── about.astro
│   ├── projects.astro
│   ├── contact.astro
│   └── projects/
│       └── [slug].astro
└── styles/          # 글로벌 스타일
```

## 로컬 실행

```bash
npm install
npm run dev
```

## 빌드 및 배포

```bash
npm run build
```

GitHub Actions를 통해 `main` 브랜치 푸시 시 자동 배포됩니다.

## 바이브코딩

이 포트폴리오는 **Claude Code**를 활용한 바이브코딩으로 제작되었습니다.
