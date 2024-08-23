import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioComponent() {
    return (
        <div className='grid grid-cols-2 gap-4 pt-8 text-center text-black bg-blue-400 ' style={{ height: '100vh' }}>
            <div>
                <h3>Texas WebGems</h3>
                <Link href='https://www.texaswebgems.com/'>
                    <Image src='' alt='' />
                </Link>
            </div>
            <div>
                <h3>Gemini Phoenix</h3>
                <Link href='https://www.geminiphoenixmusic.com/'>
                    <Image src='' alt='' />
                </Link>
            </div>
            <div className='py-8'>
                <h3>Beauty from Chaos Art</h3>
                <Link href='https://www.beautyfromchaosart.com/'>
                    <Image src='' alt='' />
                </Link>
            </div>
            <div className='py-8'>
                <h3>Southside Barbers</h3>
                <Link href='https://southsidebarbers.github.io/'>
                    <Image src='' alt='' />
                </Link>
            </div>
        </div>

    )
}