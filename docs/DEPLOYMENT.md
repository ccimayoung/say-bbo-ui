# 🚀 자동 배포 설정 가이드

## 📋 사전 준비

### 1. NPM 토큰 생성

1. [npmjs.com](https://www.npmjs.com)에 로그인
2. **Account Settings → Access Tokens**
3. **Generate New Token** 클릭
4. **Automation** 타입 선택 (또는 **Publish**)
5. 생성된 토큰 복사

### 2. GitHub Secrets 설정

1. GitHub 저장소 → **Settings**
2. **Secrets and variables → Actions**
3. **New repository secret** 클릭
4. Name: `NPM_TOKEN`
5. Value: 위에서 복사한 npm 토큰
6. **Add secret** 클릭

## 🎯 배포 프로세스

### 1. 버전 업데이트

```bash
# package.json의 version 필드 수정
npm version patch  # 1.0.13 → 1.0.14
npm version minor  # 1.0.13 → 1.1.0
npm version major  # 1.0.13 → 2.0.0
```

### 2. release 브랜치에 Push

```bash
git checkout -b release
git add .
git commit -m "Release v1.0.14"
git push origin release
```

### 3. 자동 실행 과정

1. ✅ **버전 중복 체크**: npm에 동일 버전이 있는지 확인
2. ✅ **테스트 실행**: 타입체크, 린트, 빌드
3. ✅ **npm 배포**: 새 버전 자동 배포
4. ✅ **GitHub Release**: 자동 릴리즈 노트 생성
5. ✅ **Storybook 배포**: GitHub Pages 업데이트

## ⚠️ 주의사항

### 버전 중복 에러

- 동일한 버전이 npm에 존재하면 자동으로 실패
- `package.json`의 버전을 올려야 함

### 브랜치 규칙

- `release` 브랜치에만 자동 배포
- 다른 브랜치는 테스트만 실행

## 🔍 모니터링

### GitHub Actions 확인

- **Actions 탭**에서 워크플로우 진행상황 확인
- 실패 시 로그에서 원인 파악

### 배포 확인

- **npm**: https://www.npmjs.com/package/say-bbo-ui
- **GitHub Releases**: 저장소의 Releases 탭
- **Storybook**: https://ccimayoung.github.io/say-bbo-ui
