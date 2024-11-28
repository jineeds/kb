// import Image from 'next/image';

import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <section>
                {/* 밑에 아무것도 없는 div는 그리드 만드는 */}
                <div>
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
                        <div className="absolute left-5 bottom-10 flex flex-col gap-5 text-white">
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
        </div>
    );
}
