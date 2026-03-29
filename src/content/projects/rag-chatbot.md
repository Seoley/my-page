---
title: "RAG 기반 챗봇 솔루션"
description: "기업 맞춤형 RAG 기반 챗봇 솔루션. 관공서 폐쇄망 실서비스 운영 중."
role: "PM / AI 개발"
team: "4명 (PM, Backend, Frontend, AI)"
result: "관공서 폐쇄망 실서비스 운영"
tags: ["FastAPI", "LangChain", "Sentence-Transformers", "FAISS", "BM25", "Docker"]
order: 1
---

## 프로젝트 소개

기업 맞춤형 RAG 기반 챗봇 솔루션 설계 및 개발. CPU/GPU/클라우드 환경별 최적화된 RAG 엔진을 제공하며, 실제 관공서 환경(폐쇄망)에 배포하여 운영 중입니다.

## 핵심 구현

- **하이브리드 검색:** BM25 + FAISS 결합, 한국어 특화(Kiwipiepy 형태소 분석)
- **의도 분류:** 프로그램 추천 / 정보 조회 / 가이드 / FAQ 라우팅
- **환경 맞춤 배포:** CPU(BM25+Embedding), GPU(로컬 LLM), Cloud(API) 3모드
