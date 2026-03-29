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

## LLM 개발 철학 적용

- **RAG 아키텍처 설계**: BM25 + Vector 하이브리드 검색으로 정확도와 속도 균형
- **LLM 성능 비교 테스트**: Claude, GPT, 로컬 LLM(Llama, Mistral) 벤치마크 수행
- **프롬프트 = UX**: 사용자 의도 분류기 설계로 적절한 응답 경로 라우팅

## 핵심 구현

- **하이브리드 검색:** BM25 + FAISS 결합, 한국어 특화(Kiwipiepy 형태소 분석)
- **의도 분류:** 프로그램 추천 / 정보 조회 / 가이드 / FAQ 라우팅
- **환경 맞춤 배포:** CPU(BM25+Embedding), GPU(로컬 LLM), Cloud(API) 3모드

## 시스템 아키텍처

![RAG 기반 챗봇 시스템 아키텍처](/my-page/images/rag_architecture.png)

React 기반 프론트엔드에서 사용자 질의를 받아 Spring Boot API를 거쳐 FastAPI AI 서비스로 전달됩니다. AI 서비스에서는 의도 분류 후 BM25 + FAISS 하이브리드 검색을 수행하고, 고객 환경에 따라 CPU/GPU/Cloud 모드 중 적합한 LLM을 선택하여 응답을 생성합니다.

## LLM 벤치마크 결과 (4B 미만 로컬 모델)

| 모델 | Faithfulness | Relevance | 응답시간 | 성공률 | 종합점수 |
|------|-------------|-----------|---------|-------|---------|
| Qwen 3.5 4B (reasoning off) | 0.891 | 0.697 | 22.2s | 54.5% | **0.744** |
| Gemma 3 4B | 0.800 | 0.547 | 8.6s | 18.2% | 0.575 |
| Qwen 3.5 4B (reasoning on) | 0.750 | 0.431 | 16.3s | 18.2% | 0.509 |
| EXAONE 3.5 2.4B (AWQ) | 0.715 | 0.312 | 5.0s | 36.4% | 0.484 |

- **테스트 조건**: vLLM 서빙, RTX 3090, Gemma3 27B 평가 모델
- **종합점수**: Faithfulness×0.4 + Relevance×0.4 + 성공률×0.2
- **결론**: 성능-속도 trade-off에서 **Qwen 3.5 4B**가 최적
