# Project structure

- apps
  - demo-angular-web
  - demo-admin-angular-web
  - demo-api
  - bla-angular-web
  - bla-angular-desktop
  - bla-api
- libs
  - demo-angular-web
    - feature1
    - feature2
  - demo-admin-angular-web
    - feature1
    - feature2
  - demo-api
    - domain1
      - interfaces
      - api
        - dto
        - entities
        - domain1.controller
        - domain1.service
    - domain2
      - interfaces
      - api
        - dto
        - entities
        - domain2.controller
        - domain2.service
  - bla-api
    - domain3
      - interfaces
      - api
        - dto
        - entities
        - domain3.controller
        - domain3.service
    - domain4
      - interfaces
      - api
        - dto
        - entities
        - domain4.controller
        - domain4.service
    - shared
      - util
      - ui

## Running cypress tests demo api

First you need to add cypress.env.json to root of demo-api-e2e project

{
  "DEMO_API_BASE_URL": "http://localhost:3333/api"
}

$ yarn ng e2e demo-api-e2e --watch --headless=false
