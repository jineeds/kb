// import Image from 'next/image';

import { ChevronRight, ChevronsRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col gap-5">
            <section>
                {/* 밑에 아무것도 없는 div는 그리드 만드는 */}
                <div className="container">
                    <div className="text-6xl font-bold">thinK Great</div>
                    {/* 만약 스와이퍼 넣으려면 여기다 넣기 */}
                    <div className="relativ">
                        <Image
                            src="/imges/main-intro.avif"
                            alt=""
                            width={1300}
                            height={1300}
                            className="w-full h-screen object-cover"
                        />
                        {/* 포지션으로 글자를 하늘 위로 띄우기 감싸고 있는애 전체(부모)를 적용 */}
                        <div className="absolute left-8 bottom-10 flex flex-col gap-5 text-white">
                            {/* left-5 -> 1=4 / 5=(4*5=20) 4픽셀 단위라고 보면 됨 */}
                            <span className="text-xl ">kb그룹</span>
                            <strong className="text-3xl">
                                KG그룹광고
                                <br />
                                드디어 TV방송에서
                                <br />
                                만나다.
                            </strong>
                        </div>
                    </div>
                </div>
            </section>
            {/* 섹션2 */}
            <section>
                {/* 그리드 잡기 */}
                <div className="container">
                    <ul className="">
                        <li>
                            <Link href="#" className="flex flex-col gap-3">
                                <Image
                                    src="/imges/news-midea1.avif"
                                    alt=""
                                    width={1300}
                                    height={1300}
                                    className="w-full aspect-video object-cover"
                                />
                            </Link>

                            <div className="flex flex-col ">
                                <span className="text-indigo-700 text-base">소셜미디어</span>
                                <strong className="font-extrabold text-xl">
                                    소통과 화합의 현장! KG모빌리티 파트너스 데이
                                </strong>
                            </div>
                        </li>{' '}
                        <li>
                            <Link href="#">
                                <Image
                                    src="/imges/news-midea2.avif"
                                    alt=""
                                    width={1300}
                                    height={1300}
                                    className="w-full aspect-video object-cover"
                                />
                            </Link>
                        </li>{' '}
                        <div className="flex flex-col ">
                            <span>여든여섯번째 창</span>
                            <strong>자극과 반응 사이</strong>
                        </div>
                        <li>
                            <Link href="#">
                                <Image
                                    src="/imges/news-midea3.avif"
                                    alt=""
                                    width={1300}
                                    height={1300}
                                    className="w-full aspect-video object-cover"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            <seciton>
                <div className="container">
                    {/* 타이틀 */}
                    <h2 className="flex flex-row">
                        <Link href="#">
                            {' '}
                            곽재선의 창 <ChevronRight />
                        </Link>
                    </h2>
                    {/* 컨텐츠 */}
                    <div></div>
                </div>
            </seciton>
        </div>
    );
}
