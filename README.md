# GodWord

Monorepo 前後端分離架構。

## 專案結構

```
godWordProject/
├── backend/     ← Spring Boot 4 + JPA + H2
├── frontend/    ← React + Vite + TypeScript
└── README.md
```

## 開發啟動

需要開兩個終端機，分別啟動前後端：

### 後端 (port 8080)

```bash
cd backend
./mvnw spring-boot:run
```

### 前端 (port 5173)

```bash
cd frontend
npm run dev
```

前端 Vite dev server 會自動將 `/api/*` 請求 proxy 到後端 `localhost:8080`。

## 常用連結

| 服務 | URL |
|------|-----|
| 前端 | http://localhost:5173 |
| 後端 API | http://localhost:8080/api |
| H2 Console | http://localhost:8080/h2-console |
