import Image from 'next/image'
import heroImg from '../public/img/meClipArt.jpg'
import { useTheme } from 'next-themes'
export default function homeImg() {
    return (
        <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="">
                <ThemedImage></ThemedImage>
            </div>
        </div>
    )
}
function ThemedImage() {
    const { resolvedTheme } = useTheme()
    let src

    switch (resolvedTheme) {
        case 'light':
            src = { heroImg }
            break
        case 'dark':
            src = { heroImg }
            break
        default:
            src =
                'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
            break
    }

    return (
        <Image
            src={heroImg}
            rel="noreferrer"
            width="616"
            height="575"
            alt="Hero Illustration"
            layout="intrinsic"
            loading="eager"
            placeholder="blur"
            className="bg-blend-overlay"
        />
    )
}
