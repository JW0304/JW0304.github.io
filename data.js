window.siteContent = {
    navigation: {
        logo: "Jaewon Yang",
        logoAccent: "_",
        links: [
            { label: "Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Tech", href: "#Tech" },
            // { label: "Awards", href: "#awards" },
            { iconClass: "fab fa-github", href: "https://github.com/JW0304", external: true, noUnderline: true }
        ]
    },
    hero: {
        intro: {
            text: "Hi I'm",
            link: { label: "Jaewon Yang", href: "https://github.com/JW0304" }
        },
        subtitle: "A developer who makes beautiful code",
        achievements: []
    },
    projects: [
        {
            title: "Tickget",
            description: "실전형 모의 티켓팅 사이트 (7주, 7명)",
            url: "https://github.com/Tickget/Tickget",
            backgroundImage: "./imgs/tickget.png",
            backgroundColor: "#0b2a3e",
            featured: true
        },
        {
            title: "Watt's Up",
            description: "스마트싱스 연동 전력 사용량 앱 (7주, 6명)",
            url: "https://github.com/Ayo-WattsUp/WattsUp",
            backgroundImage: "./imgs/wattsup.png",
            backgroundColor: "#ed1a44"
        },
        {
            title: "HANDI",
            description: "스마트 노인 돌봄 사이트 (8주, 6명)",
            url: "https://github.com/HANDI-CARE",
            backgroundImage: "./imgs/handi.png",
            backgroundColor: "#000000"
        }
    ],
    about: {
        title: "About",
        paragraphs: [
            "안녕하세요, 양재원입니다. 프론트엔드 개발자로서 사용자 경험을 중시하며 성장하고 있습니다.",
            "Tickget (2025.10.10 ~ 11.30): 실전형 모의 티켓팅 사이트 프로젝트에서 빠르고 정확한 페이지 구현과 최적화 작업을 담당했습니다. MUI를 활용한 빠른 페이지 구현, SVG/HTML 좌석 렌더링 속도 최적화, Three.js를 통한 Blender 생성 glb 파일 표시, Cypress를 활용한 대기열 및 티켓팅 페이지 반복 테스트 간소화 등을 수행했습니다. 사용자가 원하는 티켓팅 플랫폼을 선택하여 실제와 유사한 레이아웃으로 대기열과 티켓팅을 경험할 수 있는 게이미피케이션 서비스를 제공합니다.",
            "Watt's Up (2025.08.25 ~ 10.03): 스마트싱스 연동 전력 사용량 앱 프로젝트에서 모바일 어플리케이션을 제작하고 웹/모바일 반응형 화면을 구현했습니다. React와 TypeScript로 웹 페이지를 구현하고, React Native WebView를 통해 모바일 앱 화면을 제작했습니다. 삼성 SmartThings API를 활용하여 삼성 기기의 전력 사용량을 표시하고 전기 요금을 예측하는 기능을 구현했습니다. Vercel에 웹 페이지를 배포하고 프론트엔드 아키텍처를 설계했습니다.",
            "HANDI (2025.07.07 ~ 08.22): 스마트 노인 돌봄 사이트 프로젝트에서 API 연동, 소셜 로그인 구현, 컴포넌트 개발/관리를 담당했습니다. Swagger와 Postman을 통해 API 명세서를 확인하고 RESTful API를 연동했으며, 구글, 네이버, 카카오톡의 OAuth 2.0 소셜 로그인을 구현했습니다. Ant Design과 Atomic Design Pattern으로 컴포넌트를 개발하고 관리했습니다. 기존 노인 돌봄 서비스의 어려움을 개선하고 보호자, 요양보호사, 의료진을 연결하는 서비스를 제공합니다."
        ]
    },
    tech: {
        title: "Tech",
        categories: [
            {
                label: "Frontend",
                items: "React / TypeScript / JavaScript / HTML / CSS / Tailwind CSS / Material Design / Ant Design / Vue.js / Bootstrap"
            },
            {
                label: "State Management & Tools",
                items: "Zustand / React Native / Expo / WebRTC / Three.js / Cypress"
            },
            {
                label: "Backend & Database",
                items: "Python / Django / Node.js / SQLite"
            },
            {
                label: "Development Tools",
                items: "Git / GitHub / GitLab / Postman / Swagger / Jira / Notion / Figma / Excalidraw"
            }
        ]
    },
    // awards: {
    //     title: "Awards",
    //     items: [
    //         {
    //             label: "Award Title",
    //             detail: "Date / Description"
    //         }
    //     ]
    // }
};

