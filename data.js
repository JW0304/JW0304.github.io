/**
 * 모든 콘텐츠는 이 객체만 수정하면 됩니다.
 * 필요한 경우 항목을 추가/삭제하거나 텍스트를 바꾸세요.
 */
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
            description: "실전형 모의 티켓팅 사이트",
            url: "https://github.com/Tickget/Tickget",
            backgroundColor: "#0b2a3e",
            featured: true
        },
        {
            title: "Watt's Up",
            description: "스마트싱스 연동 전력 사용량 앱",
            url: "https://github.com/Ayo-WattsUp/WattsUp",
            backgroundColor: "#ed1a44"
        },
        {
            title: "HANDI",
            description: "스마트 노인 돌봄 사이트",
            url: "https://github.com/HANDI-CARE",
            backgroundColor: "#000000"
        }
    ],
    about: {
        title: "About",
        paragraphs: [
            "안녕하세요, 양재원입니다. 개발자로서 성장하고 있습니다."
        ]
    },
    tech: {
        title: "Tech",
        categories: [
            {
                label: "Skills",
                items: "JavaScript / HTML / CSS / React / Node.js"
            },
            {
                label: "Learning",
                items: "TypeScript / Python / Next.js"
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

