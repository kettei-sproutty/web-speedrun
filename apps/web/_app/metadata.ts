import type { Metadata } from 'next'

const metadata: Metadata = {
    appleWebApp: {
        capable: true,
        title: "Web Speedrun",
        statusBarStyle: "black-translucent"
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        userScalable: false,
        viewportFit: 'cover'
    },
    themeColor: '#000000',
    title: {
        default: "Web Speedrun",
        template: "%s | Web Speedrun"
    },
    description: "A speedrun of the web",
    icons: {
        apple: '/images/android-touch-icon.png'
    }
}

export default metadata