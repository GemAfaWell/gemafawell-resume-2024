import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioComponent() {
    return (
        <div>
            <div className='grid grid-cols-2 gap-20 pt-8 text-center text-black bg-blue-400'>
                <div className='py-8'>
                <Link href='https://www.texaswebgems.com/'>
                        <h3>Texas WebGems</h3>
                        <small>Next.js, JavaScript, Tailwind CSS</small>
                        <Image src='/Texas-WebGems.webp' alt='Texas WebGems' width={200} height={256} className='m-auto rounded-xl' />
                </Link>
            </div>
                <div className='py-8'>
                    <Link href='https://healthdata.dshs.texas.gov/'>
                        <h3>Texas Health Data</h3>
                        <div className=''>
                            <p className='text-xs'>C#, Razor, ASP.NET MVC, .NET Framework, JSON,</p>
                            <p className='text-xs'>jQuery, Bootstrap, JavaScript, Slick Carousel</p>
                        </div>
                        <Image src='/THD-Home.webp' alt='Texas Health Data' width={256} height={256} className='m-auto rounded-xl' />
                </Link>
            </div>
            </div>
            <div>
                <div className='flex items-center justify-center pt-8 pb-16 text-center'>
                    <Link href='https://www.dshs.texas.gov/center-health-statistics/advanced-analytics-team'>
                        <h3>Texas Department of State Health Services - Advanced Analytics</h3>
                        <small>Drupal, JSON</small>
                        <Image src='/Advanced-Analytics-Texas-DSHS.webp' alt='Department of State Health Services - Advanced Analytics' style={{ objectFit: 'contain' }} width={256} height={384} className='m-auto rounded-xl' />
                </Link>
                </div>
            </div>
        </div>
    )
}