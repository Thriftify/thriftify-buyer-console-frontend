import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import images from '../../public/images'
import { AddIcon, SearchIcon } from '@/components/SVGs/SVGicons'

export default function Home() {
    return (
        <>
            <Head>
                <title>Homepage | Thriftify</title>
                <meta name="description" content="Homepage for thriftify web application" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.homepage}>
                <section className={styles.heroSection}>
                    <div className={styles.backgroundImg}>
                        <Image src={images.heroImg} alt='hero section' />
                    </div>
                    <div className={styles.heroSection__lhs}>
                        <h2>Join a world of exciting auctions and one-time sales.</h2>
                        <p>Discover hidden treasures and exclusive deals that match your style and budget.</p>
                        <button>View products</button>
                    </div>
                    <div className={styles.heroSection__rhs}>
                        <div className={styles.searchContainer}>
                            <span className={styles.searchIcon}>
                                <SearchIcon />
                            </span>
                            <div className={styles.searchContainer__textContents}>
                                <h4>Quick Search</h4>
                                <p>Start by typing the product you want to find below</p>
                            </div>
                            <input type="text" name="productName" placeholder='Name of product' />
                            <button>Find product</button>
                        </div>
                    </div>
                </section>
                <section className={styles.postAdvertSection}>
                    <div className={styles.postAdvertSection__lhs}>
                        <h3>Got something to sell or auction?</h3>
                        <p>Post an advert for free.</p>
                    </div>
                    <div className={styles.postAdvertSection__rhs}>
                        <button><AddIcon /> Post advert</button>
                    </div>
                </section>
                <section className={styles.productsSection}>
                    <h2>Trending products</h2>
                    <div className={styles.products}>
                        {([...Array(13)]).map((product, index) =>
                            <div className={styles.product}>
                                <div className={styles.product__topArea}>
                                    <span className={styles.tag}>Auction</span>
                                    <div className={styles.image}>
                                        <Image src={images.car_img} alt='product' />
                                    </div>
                                    <div className={styles.usersSection}>
                                        <div className={styles.usersSection__users}>
                                            <span><Image src={images.memoji_3} alt='user' /></span>
                                            <span><Image src={images.memoji_2} alt='user' /></span>
                                            <span><Image src={images.memoji_1} alt='user' /></span>
                                        </div>
                                        <h4>+14k</h4>
                                    </div>
                                </div>
                                <div className={styles.product__bottomArea}>
                                    <h3>Toyota camry 2014</h3>
                                    <span>Bid ends in: <span className={styles.counterBox}>1hr 30mins</span></span>
                                    <p>Posted on: May 27, 2023 at 04:26pm</p>
                                </div>
                            </div>)}
                    </div>
                </section>
            </main>
        </>
    )
}
