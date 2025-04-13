const articles = [
    {
        image: 'https://i.ibb.co/S7md4qzK/aiav-1.webp',
        alt: 'aiav',
        title: 'AI Arch Viz',
        technology: 'GenAI & Next.js',
        date: '2025 January',
        tag: ['fullstack', 'frontend', 'backend', 'ai', 'llm', 'ml']
    },
    {
        image: 'https://i.ibb.co/qMRv30sF/ww-icon-2.webp',
        alt: 'web-whisper',
        title: 'Web Whisper',
        technology: 'JavaScript',
        date: '2024 November',
        tag: ['frontend', 'fullstack']
    },
    {
        image: 'https://i.ibb.co/b39vGsr/lare-icon.webp',
        alt: 'lare-app',
        title: 'LARE APP',
        technology: 'React Native & LLM',
        date: '2024 May',
        tag: ['fullstack', 'frontend', 'backend', 'ai', 'llm', 'ml']
    },
    {
        image: 'https://i.ibb.co/SvYqsFp/zzai-cover.webp',
        alt: 'zzai',
        title: 'Zzai.tech',
        technology: 'SvelteKit',
        date: '2024 March',
        tag: ['fullstack', 'frontend', 'backend']
    },
    {
        image: 'https://i.ibb.co/vvrxyTx/lilidan-ico.webp',
        alt: 'lilidan',
        title: 'Lili & Dan eCom.',
        technology: 'Angular',
        date: '2024 February',
        tag: ['fullstack', 'frontend', 'backend']
    },
    {
        image: 'https://i.ibb.co/0scBmsv/vid-emotion.webp',
        alt: 'emotion-eval',
        title: 'Video Emotion Eval.',
        technology: 'LLM',
        date: '2023 December',
        tag: ['llm', 'ai', 'ml', 'cv']
    },
    {
        image: 'https://i.ibb.co/FnpFQ5P/solar-2.webp',
        alt: 'solar-panel',
        title: 'Solar Farm Mapping',
        technology: 'ViT',
        date: '2023 December',
        tag: ['ai', 'ml', 'cv']
    },
    {
        image: 'https://i.ibb.co/VWhFBd5/port-ico.webp',
        alt: 'portfolio',
        title: 'Portfolio Website',
        technology: 'Vue',
        date: '2023 November',
        tag: ['frontend']
    },
    {
        image: 'https://i.ibb.co/0BzNcxw/runway.webp',
        alt: 'runway',
        title: 'Airport Runway Insp.',
        technology: 'UAV',
        date: '2023 October',
        tag: ['ai', 'ml', 'cv']
    },
    {
        image: 'https://i.ibb.co/YfXZrxL/wildfire.webp',
        alt: 'wildfire',
        title: 'Forest Fire Risk Eval.',
        technology: 'YOLOv8',
        date: '2023 August',
        tag: ['ai', 'ml', 'cv']
    },
    {
        image: 'https://i.ibb.co/jyKjX8z/wildfire-gee.webp',
        alt: 'wildfire-gee',
        title: 'Wildfire Prediction',
        technology: 'GEE',
        date: '2023 July',
        tag: ['ai', 'ml', 'cv']
    },
    {
        image: 'https://i.ibb.co/TwxdtSC/carbon.webp',
        alt: 'carbon',
        title: 'Carbon Mapping',
        technology: 'GEE',
        date: '2023 June',
        tag: ['ai', 'ml', 'cv']
    },
    {
        link: '/work/plant-diary.html',
        image: 'https://i.ibb.co/HtG3wDT/plant-diary-o.webp',
        alt: 'plant-diary',
        title: 'Plant Diary',
        technology: 'React Native',
        date: '2023 May',
        tag: ['fullstack', 'frontend', 'backend']
    },
    {
        image: 'https://i.ibb.co/GWmbm26/mini-twitter.webp',
        alt: 'mini-twitter',
        title: 'Mini-Twitter System',
        technology: 'AWS',
        date: '2023 May',
        tag: ['backend', 'devops']
    },
    {
        link: '/work/ar-image-track.html',
        image: 'https://i.ibb.co/6XSTQb4/ar-image-track-o.webp',
        alt: 'ar-image-track',
        title: 'AR Image Tracking',
        technology: 'OpenCV',
        date: '2023 April',
        tag: ['cv']
    },
    {
        image: 'https://i.ibb.co/s2LXrZQ/hotdog.webp',
        alt: 'not-hotdog',
        title: 'Not Hotdog App',
        technology: 'Pytorch',
        date: '2022 December',
        tag: ['cv', 'ml']
    },
    {
        image: 'https://i.ibb.co/16kf8Xm/trip-plan-gmap.webp',
        alt: 'trip-planner',
        title: 'Trip Planner',
        technology: 'Search Algorithm',
        date: '2022 December',
        tag: ['algo', 'ai']
    },
    {
        image: 'https://i.ibb.co/0fJw3gx/ar-idol.webp',
        alt: 'ar-idol',
        title: 'AR Idol',
        technology: 'ThreeJS',
        date: '2022 May',
        tag: ['frontend', 'cv', 'ar']
    },
    {
        image: 'https://i.ibb.co/XjP6RjZ/bugtech-r.webp',
        alt: 'bugtech-ar',
        title: 'BugTech AR',
        technology: 'Unity',
        date: '2021 Jan - 2022 Mar',
        tag: ['cv', 'ar', 'game']
    },
    {
        image: 'https://i.ibb.co/P62wHCM/pwp-lib-1.webp',
        alt: 'pwp-lib',
        title: 'PWP Asset Library',
        technology: 'React',
        date: '2020 April',
        tag: ['fullstack', 'frontend', 'backend']
    },
    {
        image: 'https://i.ibb.co/yYZFCmG/aodabo-o.webp',
        alt: 'python-web',
        title: 'Python Web Tutorial',
        technology: 'Python',
        date: '2019 Jan - 2020 May',
        tag: ['fullstack', 'frontend', 'backend']
    },
    {
        image: 'https://i.ibb.co/C0sdwz4/time-travel.webp',
        alt: 'time-travel',
        title: 'Time Traveler VR',
        technology: 'Unity',
        date: '2019 May',
        tag: ['game', 'ar', 'cv']
    },
    {
        image: 'https://i.ibb.co/HP7Q6hc/robot.webp',
        alt: 'robot',
        title: 'Robotics Projects',
        technology: 'C++',
        date: '2018 December',
        tag: ['embedded']
    },
    {
        image: 'https://i.ibb.co/W2q34Qr/city-ar.webp',
        alt: 'city-ar',
        title: 'City Explorer AR',
        technology: 'ARKit',
        date: '2018 December',
        tag: ['ar', 'cv']
    },
];

export default articles;